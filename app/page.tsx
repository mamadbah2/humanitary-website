import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Users, DollarSign, ThumbsUp } from "lucide-react"
import StatCard from "@/components/stat-card"
import TestimonialCard from "@/components/testimonial-card"
import EventCard from "@/components/event-card"
import NewsCard from "@/components/news-card"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full h-[600px]">
        <div className="absolute inset-0 bg-black/50 z-10" />
        <Image
          src="/images/img7.jpg"
          alt="Femmes transformatrices de poisson au travail"
          width={1920}
          height={600}
          className="object-cover w-full h-full"
          priority
        />
        <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center px-4 md:px-6 lg:px-8">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Soutenez les Artisanes de la Mer : <br />
            Offrons-leur un Avenir Meilleur
          </h1>
          <p className="text-white text-lg md:text-xl max-w-3xl mb-8">
            Ensemble, améliorons les conditions de travail des femmes transformatrices de poisson au Sénégal
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button asChild size="lg" className="bg-amber-500 hover:bg-amber-600 text-white">
              <Link href="/don">Faire un Don</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="bg-transparent border-white text-white hover:bg-white/10"
            >
              <Link href="/notre-histoire">Découvrir Leur Combat</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Welcome Section */}
      <section className="py-16 px-4 md:px-6 lg:px-8 bg-white">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-teal-500 rounded-full opacity-20"></div>
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-amber-500 rounded-full opacity-20"></div>
              <div className="relative z-10 overflow-hidden rounded-lg">
                <Image
                  src="/images/img1.jpg"
                  alt="Femme transformatrice de poisson"
                  width={600}
                  height={500}
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
            <div>
              <Badge className="mb-4 bg-teal-100 text-teal-800 hover:bg-teal-100">Notre Mission</Badge>
              <h2 className="text-3xl font-bold mb-4">Elles sont le Cœur de Nos Communautés</h2>
              <p className="text-gray-600 mb-6">
                Les femmes transformatrices de poisson jouent un rôle crucial dans l'économie locale et la sécurité
                alimentaire au Sénégal. Malgré leur savoir-faire ancestral et leur contribution essentielle, elles
                travaillent dans des conditions difficiles, sans équipement adéquat et avec un accès limité aux
                ressources financières.
              </p>
              <p className="text-gray-600 mb-8">
                Notre mission est d'améliorer leurs conditions de travail, de valoriser leur métier et de renforcer leur
                autonomie économique.
              </p>
              <Button asChild className="group">
                <Link href="/notre-histoire">
                  En Savoir Plus sur Leur Histoire
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 md:px-6 lg:px-8 bg-gray-50">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <StatCard value="100" label="Femmes à soutenir" icon={<Users className="h-6 w-6 text-teal-600" />} />
            <StatCard value="15M" label="FCFA Objectif" icon={<DollarSign className="h-6 w-6 text-teal-600" />} />
            <StatCard value="25" label="Frigos Nécessaires" icon={<ThumbsUp className="h-6 w-6 text-teal-600" />} />
            <StatCard value="15" label="Fours à Moderniser" icon={<ThumbsUp className="h-6 w-6 text-teal-600" />} />
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-16 px-4 md:px-6 lg:px-8 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-amber-100 text-amber-800 hover:bg-amber-100">Nos Projets</Badge>
            <h2 className="text-3xl font-bold">Comment Votre Générosité Transforme Leurs Vies</h2>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
              Chaque don contribue directement à l'amélioration des conditions de travail et de vie des femmes
              transformatrices de poisson.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card>
              <CardHeader className="pb-2">
                <div className="w-12 h-12 rounded-full bg-teal-100 flex items-center justify-center mb-4">
                  <span className="text-teal-600 text-xl font-bold">01</span>
                </div>
                <CardTitle>Achat de Réfrigérateurs</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Les réfrigérateurs permettent de conserver le poisson plus longtemps, réduisant les pertes et
                  augmentant les revenus.
                </p>
                <div className="mt-4">
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div className="bg-teal-600 h-2.5 rounded-full" style={{ width: "65%" }}></div>
                  </div>
                  <div className="flex justify-between mt-2 text-sm">
                    <span>Objectif: 5M FCFA</span>
                    <span className="text-teal-600 font-medium">65%</span>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button asChild className="w-full">
                  <Link href="/don">Soutenir ce projet</Link>
                </Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <div className="w-12 h-12 rounded-full bg-amber-100 flex items-center justify-center mb-4">
                  <span className="text-amber-600 text-xl font-bold">02</span>
                </div>
                <CardTitle>Fours à Fumer Écologiques</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Des fours modernes et écologiques pour améliorer la qualité des produits et réduire l'impact sur la
                  santé des femmes.
                </p>
                <div className="mt-4">
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div className="bg-amber-600 h-2.5 rounded-full" style={{ width: "40%" }}></div>
                  </div>
                  <div className="flex justify-between mt-2 text-sm">
                    <span>Objectif: 4M FCFA</span>
                    <span className="text-amber-600 font-medium">40%</span>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button asChild className="w-full">
                  <Link href="/don">Soutenir ce projet</Link>
                </Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                  <span className="text-blue-600 text-xl font-bold">03</span>
                </div>
                <CardTitle>Fonds de Roulement</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Un fonds de roulement pour permettre aux femmes d'acheter du poisson frais en plus grande quantité et
                  à meilleur prix.
                </p>
                <div className="mt-4">
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: "25%" }}></div>
                  </div>
                  <div className="flex justify-between mt-2 text-sm">
                    <span>Objectif: 6M FCFA</span>
                    <span className="text-blue-600 font-medium">25%</span>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button asChild className="w-full">
                  <Link href="/don">Soutenir ce projet</Link>
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 px-4 md:px-6 lg:px-8 bg-gray-50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-teal-100 text-teal-800 hover:bg-teal-100">Témoignages</Badge>
            <h2 className="text-3xl font-bold">Paroles de Femmes</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <TestimonialCard
              quote="Grâce aux nouveaux équipements, je peux produire plus et de meilleure qualité. Mes revenus ont augmenté et je peux maintenant envoyer tous mes enfants à l'école."
              name="Fatou Diop"
              role="Transformatrice depuis 15 ans"
              imageSrc="/images/img10.jpg"
            />
            <TestimonialCard
              quote="Le four écologique a changé ma vie. Je ne tousse plus comme avant et le poisson est mieux fumé. Les clients préfèrent mon poisson maintenant."
              name="Aminata Seck"
              role="Transformatrice depuis 20 ans"
              imageSrc="/images/img7.jpg"
            />
            <TestimonialCard
              quote="Avec le fonds de roulement, je peux acheter plus de poisson quand le prix est bas. J'ai pu embaucher deux jeunes femmes pour m'aider."
              name="Mariama Ndiaye"
              role="Cheffe de groupement"
              imageSrc="/images/img1.jpg"
            />
          </div>
        </div>
      </section>

      {/* Events Section */}
      <section className="py-16 px-4 md:px-6 lg:px-8 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-amber-100 text-amber-800 hover:bg-amber-100">Événements</Badge>
            <h2 className="text-3xl font-bold">Nos Prochains Événements</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <EventCard
              title="Journée de sensibilisation au marché de Mbour"
              date="15 Juin 2025"
              location="Marché central de Mbour"
              imageSrc="/images/img5.jpg"
              category="Sensibilisation"
            />
            <EventCard
              title="Formation aux techniques de conservation"
              date="22 Juin 2025"
              location="Centre communautaire de Joal"
              imageSrc="/images/img6.jpg"
              category="Formation"
            />
            <EventCard
              title="Inauguration des nouveaux fours écologiques"
              date="10 Juillet 2025"
              location="Site de transformation de Kayar"
              imageSrc="/images/img3.jpg"
              category="Événement"
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 md:px-6 lg:px-8 bg-teal-800 text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Votre don compte énormément pour elles</h2>
          <p className="max-w-2xl mx-auto mb-8 text-teal-100">
            Chaque contribution, quelle que soit sa taille, fait une différence réelle dans la vie de ces femmes
            courageuses et de leurs familles. Donnez ce que vous pouvez aujourd'hui.
          </p>
          <Button asChild size="lg" className="bg-amber-500 hover:bg-amber-600 text-white">
            <Link href="/don">Faire un Don Maintenant</Link>
          </Button>
        </div>
      </section>

      {/* News Section */}
      <section className="py-16 px-4 md:px-6 lg:px-8 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-teal-100 text-teal-800 hover:bg-teal-100">Actualités</Badge>
            <h2 className="text-3xl font-bold">Suivez Notre Actualité</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <NewsCard
              title="Livraison des premiers réfrigérateurs à Mbour"
              excerpt="Grâce à vos dons, nous avons pu livrer 5 réfrigérateurs au groupement de femmes de Mbour..."
              date="10 Mai 2025"
              category="Équipement"
              imageSrc="/images/img2.jpg"
              slug="livraison-refrigerateurs-mbour"
            />
            <NewsCard
              title="Formation sur les normes d'hygiène à Joal"
              excerpt="Une session de formation sur les normes d'hygiène a été organisée pour 30 femmes transformatrices..."
              date="28 Avril 2025"
              category="Formation"
              imageSrc="/images/img3.jpg"
              slug="formation-normes-hygiene-joal"
            />
            <NewsCard
              title="Partenariat avec l'Université de Dakar"
              excerpt="Un nouveau partenariat avec l'Université de Dakar permettra d'améliorer les techniques de transformation..."
              date="15 Avril 2025"
              category="Partenariat"
              imageSrc="/images/img4.jpg"
              slug="partenariat-universite-dakar"
            />
          </div>
        </div>
      </section>
    </div>
  )
}
