import React, { useMemo } from "react";
import dynamic from "next/dynamic";

import { useList, useNavigation } from "@refinedev/core";

import { ProjectOutlined, RightCircleOutlined } from "@ant-design/icons";
import { PieConfig } from "@ant-design/plots";
import { Button, Card } from "antd";

import { Text } from "@components";
import { TaskStage } from "@interfaces";

const Pie = dynamic(() => import("@ant-design/plots/es/components/pie"), {
    ssr: false,
});

export const DashboardTasksChart: React.FC<{}> = () => {
    const { list } = useNavigation();

    const { data, isError, error } = useList<TaskStage>({
        resource: "taskStages",
        pagination: {
            pageSize: 6,
        },
        meta: { fields: ["title", { tasksAggregate: [{ count: ["id"] }] }] },
    });

    const tasksData = useMemo(() => {
        if (!data?.data?.length) {
            return [];
        }

        return data.data
            .map((stage) => ({
                title: stage.title,
                value: stage.tasksAggregate?.[0]?.count?.id ?? 0,
            }))
            .filter(
                (stage) =>
                    stage.value !== null &&
                    stage.value !== undefined &&
                    stage.value > 0,
            )
            .sort((a, b) => (b.value ?? 0) - (a.value ?? 0));
    }, [data?.data]);

    const COLORS = [
        "#BAE0FF",
        "#69B1FF",
        "#1677FF",
        "#0958D9",
        "#10239E",
        "#061178",
        "#030852",
        "#03052E",
        "#000B0A",
        "#000000",
    ];

    const config: PieConfig = {
        width: 168,
        height: 168,
        data: tasksData,
        angleField: "value",
        colorField: "title",
        color: COLORS,
        legend: false,
        radius: 1,
        innerRadius: 0.6,
        label: false,
        syncViewPadding: true,
        statistic: {
            title: false,
            content: false,
        },
    };

    return (
        <Card
            style={{ height: "100%" }}
            headStyle={{ padding: "8px 16px" }}
            bodyStyle={{
                padding: "32px",
            }}
            title={
                <div
                    style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "8px",
                    }}
                >
                    <ProjectOutlined />
                    <Text size="sm" style={{ marginLeft: ".5rem" }}>
                        Tasks
                    </Text>
                </div>
            }
            extra={
                <Button
                    onClick={() => list("tasks")}
                    icon={<RightCircleOutlined />}
                >
                    See kanban board
                </Button>
            }
        >
            <div
                style={{
                    position: "relative",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                }}
            >
                <Pie {...config} />
            </div>
            <div
                style={{
                    display: "flex",
                    width: "100%",
                    flexWrap: "wrap",
                    marginTop: "48px",
                }}
            >
                {tasksData?.map((item, index) => (
                    <div
                        key={index}
                        style={{
                            display: "flex",
                            width: "50%",
                            alignItems: "center",
                            marginTop: "8px",
                        }}
                    >
                        <div
                            style={{
                                width: 8,
                                height: 8,
                                backgroundColor: COLORS[index],
                                marginRight: ".5rem",
                            }}
                        />
                        <Text
                            size="md"
                            style={{
                                textTransform: "capitalize",
                                whiteSpace: "nowrap",
                            }}
                        >
                            {item.title.toLowerCase()}
                        </Text>
                    </div>
                ))}
            </div>
        </Card>
    );
};
