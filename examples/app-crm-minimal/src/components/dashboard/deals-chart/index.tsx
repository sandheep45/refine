import React, { useMemo } from "react";
import dynamic from "next/dynamic";
import { useList } from "@refinedev/core";

import { DollarOutlined, RightCircleOutlined } from "@ant-design/icons";
import { AreaConfig } from "@ant-design/plots";
import { Button, Card } from "antd";
import dayjs from "dayjs";

import { Text } from "@components";
import { DealStage } from "@interfaces";

const Area = dynamic(() => import("@ant-design/plots/es/components/area"), {
    ssr: false,
});

export const DashboardDealsChart: React.FC<{}> = () => {
    const { data } = useList<DealStage>({
        resource: "dealStages",
        filters: [{ field: "title", operator: "in", value: ["WON", "LOST"] }],
        meta: {
            fields: [
                "title",
                {
                    dealsAggregate: [
                        { groupBy: ["closeDateMonth", "closeDateYear"] },
                        { sum: ["value"] },
                    ],
                },
            ],
        },
    });

    const dealData = useMemo(() => {
        const won = data?.data
            .find((node) => node.title === "WON")
            ?.dealsAggregate.map((item) => {
                const { closeDateMonth, closeDateYear } = item.groupBy!;
                const date = dayjs(`${closeDateYear}-${closeDateMonth}-01`);
                return {
                    timeUnix: date.unix(),
                    timeText: date.format("MMM YYYY"),
                    value: item.sum?.value,
                    state: "Won",
                };
            });

        const lost = data?.data
            .find((node) => node.title === "LOST")
            ?.dealsAggregate.map((item) => {
                const { closeDateMonth, closeDateYear } = item.groupBy!;
                const date = dayjs(`${closeDateYear}-${closeDateMonth}-01`);
                return {
                    timeUnix: date.unix(),
                    timeText: date.format("MMM YYYY"),
                    value: item.sum?.value,
                    state: "Lost",
                };
            });

        return [...(won || []), ...(lost || [])].sort(
            (a, b) => a.timeUnix - b.timeUnix,
        );
    }, [data]);

    const config: AreaConfig = {
        isStack: false,
        data: dealData,
        xField: "timeText",
        yField: "value",
        seriesField: "state",
        animation: true,
        startOnZero: false,
        smooth: true,
        legend: {
            offsetY: -6,
        },
        yAxis: {
            tickCount: 4,
            label: {
                formatter: (v) => {
                    return `$${Number(v) / 1000}k`;
                },
            },
        },
        tooltip: {
            formatter: (data) => {
                return {
                    name: data.state,
                    value: `$${Number(data.value) / 1000}k`,
                };
            },
        },
        areaStyle: (datum) => {
            const won = "l(270) 0:#ffffff 0.5:#b7eb8f 1:#52c41a";
            const lost = "l(270) 0:#ffffff 0.5:#f3b7c2 1:#ff4d4f";
            return { fill: datum.state === "Won" ? won : lost };
        },
        color: (datum) => {
            return datum.state === "Won" ? "#52C41A" : "#F5222D";
        },
    };

    return (
        <Card
            style={{ height: "100%" }}
            headStyle={{ padding: "8px 16px" }}
            bodyStyle={{ padding: "24px 24px 0px 24px" }}
            title={
                <div
                    style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "8px",
                    }}
                >
                    <DollarOutlined />
                    <Text size="sm" style={{ marginLeft: ".5rem" }}>
                        Deals
                    </Text>
                </div>
            }
        >
            <Area {...config} height={325} />
        </Card>
    );
};
