# 📊 Dashboard Business-IT - DSI

Ce projet est un **tableau de bord interactif** conçu pour visualiser les **indicateurs clés de performance DevOps** à l’échelle de l’entreprise, destiné à un **Directeur des Systèmes d'Information (DSI)**.

## 🚀 Objectif pédagogique

Ce dashboard a été développé dans le cadre du **TP 2 : Tableau de bord stratégique**. Il permet de :

- Suivre les performances DevOps dans le temps
- Soutenir la prise de décision IT orientée business
- Identifier les points d’amélioration en continu

## 🛠️ Stack utilisée

- [Next.js 15](https://nextjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [shadcn/ui](https://ui.shadcn.com/)
- [Recharts](https://recharts.org/) (visualisation de données)
- [Lucide](https://lucide.dev/) (icônes)
- [Framer Motion](https://www.framer.com/motion/) (animations)

## 📈 Indicateurs clés affichés

| Indicateur | Rôle stratégique |
|------------|------------------|
| **Releases / mois** | Mesure la capacité d’innovation et la vélocité de l’équipe IT. Un volume stable et fréquent de livraisons montre l’agilité. |
| **Adoption des fonctionnalités (%)** | Taux de succès business : plus l’utilisateur adopte les nouveautés, plus celles-ci sont pertinentes. |
| **Disponibilité SLA (%)** | Indique la fiabilité des systèmes IT. Un bon SLA soutient la continuité des opérations business. |
| **Temps moyen de résolution (MTTR)** | Réactivité face aux incidents. Moins c’est élevé, mieux l’équipe gère les interruptions. |
| **Satisfaction client (/10)** | Qualité perçue du service. L’IT n’est pas seulement technique, elle doit satisfaire l’utilisateur final. |

## 📊 Exemple de données

Les données utilisées couvrent 6 mois :

```plaintext
Mois        Releases   Adoption   Disponibilité   MTTR   Satisfaction
Janvier     7          72%        99.05%          3.5h   6.4 / 10
Février     4          60%        97.06%          4.4h   6.9 / 10
Mars        8          60%        99.81%          6.2h   7.1 / 10
Avril       5          73%        99.41%          5.5h   7.4 / 10
Mai         7          85%        97.62%          4.3h   8.4 / 10
Juin        3          89%        97.53%          6.9h   6.6 / 10
