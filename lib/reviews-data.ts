export interface Review {
  id: string
  author: string
  role: string
  content: string
  rating: number
  date: string
  productId?: string
}

export const reviews: Review[] = [
  {
    id: "1",
    author: "Lars O'Donnell",
    role: "Expedition Leader",
    content:
      "This machine changed my field prep workflow. The reliability in extreme conditions is unmatched, and the energy efficiency means we can run it on solar power during extended expeditions.",
    rating: 5,
    date: "2024-11-15",
  },
  {
    id: "2",
    author: "Yuki Tanaka",
    role: "Research Scientist",
    content:
      "Compact, powerful, built like a tank. After two years of continuous laboratory use, it performs exactly as it did on day one. The precision and repeatability are essential for our research protocols.",
    rating: 5,
    date: "2024-10-22",
  },
  {
    id: "3",
    author: "James Petrov",
    role: "Food Preservation Specialist",
    content:
      "Industrial quality in a home unit. The build quality and attention to detail are remarkable. It handles everything from delicate fruits to full meals with professional-grade results.",
    rating: 5,
    date: "2024-09-30",
  },
  {
    id: "4",
    author: "Sarah Chen",
    role: "Homesteader",
    content:
      "We've processed over 500 pounds of food in the first year. The machine is incredibly intuitive, and the results are consistently excellent. Best investment for our self-sufficiency goals.",
    rating: 5,
    date: "2024-11-01",
  },
  {
    id: "5",
    author: "Marcus Rodriguez",
    role: "Emergency Preparedness Consultant",
    content:
      "Essential equipment for serious preparedness. The ability to preserve complete meals with full nutrition retention gives peace of mind. Clients are always impressed with the quality.",
    rating: 4.5,
    date: "2024-10-15",
  },
  {
    id: "6",
    author: "Dr. Emma Watson",
    role: "Pharmaceutical Researcher",
    content:
      "The precision control and documentation capabilities meet our stringent lab requirements. It's become an indispensable tool for our sample preservation protocols.",
    rating: 5,
    date: "2024-09-20",
  },
]
