import { TrendingUp } from "lucide-react"
import {
    PolarGrid,
    PolarRadiusAxis,
    RadialBar,
    RadialBarChart,
    Label,
} from "recharts"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "../components/ui/card"
import { ChartContainer } from "../components/ui/chart"

// ✅ Configuração externa dos gráficos
const chartsData = [
    {
        id: "vendas",
        title: "Vendas",
        description: "Junho 2025",
        value: 200,
        color: "oklch(72.3% 0.219 149.579)",
        trend: "Tendência de alta de 5,2%",
    },
    {
        id: "produtos",
        title: "Produtos",
        description: "Junho 2025",
        value: 320,
        color: "oklch(63.7% 0.237 25.331)",
        trend: "Tendência de alta de 3,1%",
    },
    {
        id: "quantidade",
        title: "Quantidade de Produtos",
        description: "Junho 2025",
        value: 500,
        color: "oklch(62.3% 0.214 259.815)",
        trend: "Tendência de queda de 1,2%",
    },
    {
        id: "semestoque",
        title: "Sem Estoque ",
        description: "Junho 2025",
        value: 100,
        color: "oklch(62.7% 0.265 303.9)",
        trend: "Tendência de alta de 7,8%",
    },
]

const maxChartValue = Math.max(...chartsData.map((chart) => chart.value))

function ChartCard({ title, description, value, color, trend }) {
    const chartData = [
        {
            name: title,
            visitors: value,
            max: maxChartValue,
        },
    ]

    return (
        <Card className="flex flex-col">
            <CardHeader className="items-center pb-0">
                <CardTitle>{title}</CardTitle>
                <CardDescription>{description}</CardDescription>
            </CardHeader>
            <CardContent className="flex-1 pb-0">
                <ChartContainer
                    className="mx-auto aspect-square max-h-[250px]"
                    config={{}}
                >
                    <RadialBarChart
                        data={chartData}
                        startAngle={0}
                        endAngle={250}
                        innerRadius={80}
                        outerRadius={110}
                    >
                        <PolarGrid gridType="circle" radialLines={false} stroke="none" />
                        <RadialBar
                            dataKey="max"
                            cornerRadius={10}
                            fill="oklch(0.5074 0 0 / 20%)" // fundo claro
                            isAnimationActive={false}
                        />
                        <RadialBar
                            dataKey="visitors"
                            cornerRadius={10}
                            fill={color}
                        />
                        <PolarRadiusAxis tick={false} tickLine={false} axisLine={false}>
                            <Label
                                content={({ viewBox }) => {
                                    if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                                        return (
                                            <text
                                                x={viewBox.cx}
                                                y={viewBox.cy}
                                                textAnchor="middle"
                                                dominantBaseline="middle"
                                            >
                                                <tspan
                                                    x={viewBox.cx}
                                                    y={viewBox.cy}
                                                    className="fill-foreground text-4xl font-bold"
                                                >
                                                    {value.toLocaleString()}
                                                </tspan>
                                                <tspan
                                                    x={viewBox.cx}
                                                    y={(viewBox.cy || 0) + 24}
                                                    className="fill-muted-foreground"
                                                >
                                                    {title}
                                                </tspan>
                                            </text>
                                        )
                                    }
                                }}
                            />
                        </PolarRadiusAxis>
                    </RadialBarChart>
                </ChartContainer>
            </CardContent>
            <CardFooter className="flex-col gap-2 text-sm">
                <div className="flex items-center gap-2 leading-none font-medium">
                    {trend} <TrendingUp className="h-4 w-4" />
                </div>
                <div className="text-muted-foreground leading-none">
                    Comparado ao mês anterior
                </div>
            </CardFooter>
        </Card>
    )
}


export function ChartsDashboard() {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-4">
            {chartsData.map((chart) => (
                <ChartCard
                    key={chart.id}
                    title={chart.title}
                    description={chart.description}
                    value={chart.value}
                    color={chart.color}
                    trend={chart.trend}
                />
            ))}
        </div>
    )
}
