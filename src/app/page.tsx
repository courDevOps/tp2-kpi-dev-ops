// app/page.tsx
"use client"

import { Card, CardContent } from '@/components/ui/card'
import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer, Legend } from "recharts"
import { ArrowUpRight, ArrowDownRight } from "lucide-react"
import { motion } from "framer-motion"

const rawData = [
  { month: "Janv", releases: 7, adoption: 72, availability: 99.05, mttr: 3.5, csat: 6.4 },
  { month: "Févr", releases: 4, adoption: 60, availability: 97.06, mttr: 4.4, csat: 6.9 },
  { month: "Mars", releases: 8, adoption: 60, availability: 99.81, mttr: 6.2, csat: 7.1 },
  { month: "Avril", releases: 5, adoption: 73, availability: 99.41, mttr: 5.5, csat: 7.4 },
  { month: "Mai", releases: 7, adoption: 85, availability: 97.62, mttr: 4.3, csat: 8.4 },
  { month: "Juin", releases: 3, adoption: 89, availability: 97.53, mttr: 6.9, csat: 6.6 },
]

const latest = rawData[rawData.length - 1]
const prev = rawData[rawData.length - 2]

const kpis = [
  {
    label: "Releases / mois",
    value: latest.releases,
    delta: latest.releases - prev.releases,
    isPositive: latest.releases - prev.releases >= 0,
  },
  {
    label: "Adoption (%)",
    value: latest.adoption,
    delta: latest.adoption - prev.adoption,
    isPositive: latest.adoption - prev.adoption >= 0,
  },
  {
    label: "Disponibilité SLA (%)",
    value: latest.availability.toFixed(2),
    delta: (latest.availability - prev.availability).toFixed(2),
    isPositive: latest.availability - prev.availability >= 0,
  },
  {
    label: "MTTR (h)",
    value: latest.mttr,
    delta: (latest.mttr - prev.mttr).toFixed(1),
    isPositive: latest.mttr - prev.mttr <= 0,
  },
  {
    label: "Satisfaction (/10)",
    value: latest.csat,
    delta: (latest.csat - prev.csat).toFixed(1),
    isPositive: latest.csat - prev.csat >= 0,
  },
]

export default function DevOpsDashboard() {
  return (
    <div className="p-4 grid gap-6 lg:grid-cols-12">
      {kpis.map((kpi, idx) => (
        <Card key={idx} className="lg:col-span-2 shadow-xl rounded-2xl">
          <CardContent className="py-6">
            <p className="text-sm text-gray-500 mb-1">{kpi.label}</p>
            <div className="flex items-center">
              <span className="text-2xl font-semibold mr-2">{kpi.value}</span>
              {kpi.delta !== "0" && (
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className={`flex items-center text-sm ${kpi.isPositive ? "text-green-600" : "text-red-600"}`}
                >
                  {kpi.isPositive ? <ArrowUpRight size={16} /> : <ArrowDownRight size={16} />}
                  {kpi.delta}
                </motion.span>
              )}
            </div>
          </CardContent>
        </Card>
      ))}

      <Card className="lg:col-span-12 shadow-xl rounded-2xl">
        <CardContent className="p-6">
          <h2 className="text-lg font-semibold mb-2">Tendances mensuelles</h2>
          <ResponsiveContainer width="100%" height={340}>
            <LineChart data={rawData} margin={{ top: 10, right: 20, left: 0, bottom: 0 }}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis yAxisId="left" />
              <YAxis yAxisId="right" orientation="right" hide />
              <Tooltip />
              <Legend verticalAlign="bottom" height={36} />
              <Line yAxisId="left" type="monotone" dataKey="releases" name="Releases" strokeWidth={2} />
              <Line yAxisId="left" type="monotone" dataKey="adoption" name="Adoption (%)" strokeDasharray="5 5" />
              <Line yAxisId="left" type="monotone" dataKey="availability" name="Disponibilité (%)" strokeDasharray="3 4 5 2" />
              <Line yAxisId="left" type="monotone" dataKey="mttr" name="MTTR (h)" strokeDasharray="2 2" />
              <Line yAxisId="left" type="monotone" dataKey="csat" name="Satisfaction" strokeDasharray="1 3" />
            </LineChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      {/* Section stratégie */}
      <div className="lg:col-span-12">
        <h2 className="text-xl font-semibold mt-10 mb-4">🧭 Comment chaque indicateur soutient la stratégie Business-IT</h2>
        <div className="overflow-x-auto border rounded-xl shadow-md">
          <table className="min-w-full text-sm text-left">
            <thead className="bg-gray-100 border-b font-medium">
              <tr>
                <th className="px-6 py-3">Indicateur</th>
                <th className="px-6 py-3">Rôle stratégique</th>
              </tr>
            </thead>
            <tbody className="divide-y">
              <tr>
                <td className="px-6 py-4 font-medium">Releases / mois</td>
                <td className="px-6 py-4">Mesure l'agilité et la capacité d’innovation IT. Plus de releases = meilleure réactivité business.</td>
              </tr>
              <tr>
                <td className="px-6 py-4 font-medium">Adoption des fonctionnalités (%)</td>
                <td className="px-6 py-4">Indique la pertinence des livraisons IT. Forte adoption = valeur business réelle.</td>
              </tr>
              <tr>
                <td className="px-6 py-4 font-medium">Disponibilité SLA (%)</td>
                <td className="px-6 py-4">Reflète la fiabilité opérationnelle. Essentiel pour assurer la continuité métier.</td>
              </tr>
              <tr>
                <td className="px-6 py-4 font-medium">MTTR (h)</td>
                <td className="px-6 py-4">Évalue la rapidité de résolution des incidents. Un MTTR bas minimise l'impact business.</td>
              </tr>
              <tr>
                <td className="px-6 py-4 font-medium">Satisfaction client (/10)</td>
                <td className="px-6 py-4">Mesure la perception de l’IT. Un bon score améliore la collaboration avec les métiers.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
