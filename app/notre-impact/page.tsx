import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { CheckCircle } from "lucide-react"

export default function NotreImpactPage() {
  return (
    <div className="container mx-auto py-12 px-4 md:px-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold mb-6">Notre Impact</h1>

        <div className="relative w-full h-[400px] mb-8 rounded-lg overflow-hidden">
          <Image
            src="/placeholder.svg?height=400&width=1000"
            alt="Femmes transformatrices de poisson utilisant de nouveaux équipements"
            width={1000}
            height={400}
            className="object-cover w-full h-full"
          />
        </div>

        <div className="prose max-w-none mb-12">
          <p className="lead text-xl">
            Depuis le lancement de notre initiative, nous avons déjà pu observer des changements significatifs dans la
            vie des femmes transformatrices de poisson et de leurs communautés.
          </p>

          <p>
            Grâce à la générosité de nos donateurs et au travail acharné de notre équipe sur le terrain, nous avons pu
            mettre en œuvre plusieurs projets qui ont eu un impact direct et mesurable. Voici quelques-unes de nos
            réalisations à ce jour :
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="flex items-center">
                <CheckCircle className="mr-2 h-5 w-5 text-teal-600" />
                Amélioration de la santé
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4">
                Les nouveaux fours écologiques ont considérablement réduit l'exposition à la fumée nocive, entraînant
                une diminution significative des problèmes respiratoires et oculaires.
              </p>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between mb-1 text-sm">
                    <span>Réduction des problèmes respiratoires</span>
                    <span className="font-medium">40%</span>
                  </div>
                  <Progress value={40} className="h-2" />
                </div>
                <div>
                  <div className="flex justify-between mb-1 text-sm">
                    <span>Réduction des problèmes oculaires</span>
                    <span className="font-medium">35%</span>
                  </div>
                  <Progress value={35} className="h-2" />
                </div>
                <div>
                  <div className="flex justify-between mb-1 text-sm">
                    <span>Amélioration générale de la santé</span>
                    <span className="font-medium">45%</span>
                  </div>
                  <Progress value={45} className="h-2" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="flex items-center">
                <CheckCircle className="mr-2 h-5 w-5 text-amber-600" />
                Augmentation des revenus
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4">
                Grâce aux réfrigérateurs et aux techniques de conservation améliorées, les femmes peuvent désormais
                conserver leur produit plus longtemps et le vendre au meilleur prix.
              </p>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between mb-1 text-sm">
                    <span>Augmentation moyenne des revenus</span>
                    <span className="font-medium">30%</span>
                  </div>
                  <Progress value={30} className="h-2" />
                </div>
                <div>
                  <div className="flex justify-between mb-1 text-sm">
                    <span>Réduction des pertes de produit</span>
                    <span className="font-medium">60%</span>
                  </div>
                  <Progress value={60} className="h-2" />
                </div>
                <div>
                  <div className="flex justify-between mb-1 text-sm">
                    <span>Amélioration de la qualité des produits</span>
                    <span className="font-medium">50%</span>
                  </div>
                  <Progress value={50} className="h-2" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="flex items-center">
                <CheckCircle className="mr-2 h-5 w-5 text-blue-600" />
                Formation et renforcement des capacités
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4">
                Nous avons organisé des sessions de formation sur les normes d'hygiène, la gestion financière et les
                techniques de conservation, permettant aux femmes d'améliorer leurs compétences et leur autonomie.
              </p>
              <div className="mt-4">
                <div className="flex items-center justify-between border-b pb-2 mb-2">
                  <span>Femmes formées aux normes d'hygiène</span>
                  <span className="font-bold">120</span>
                </div>
                <div className="flex items-center justify-between border-b pb-2 mb-2">
                  <span>Femmes formées à la gestion financière</span>
                  <span className="font-bold">85</span>
                </div>
                <div className="flex items-center justify-between border-b pb-2 mb-2">
                  <span>Femmes formées aux techniques de conservation</span>
                  <span className="font-bold">95</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Nombre total de sessions de formation</span>
                  <span className="font-bold">24</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="flex items-center">
                <CheckCircle className="mr-2 h-5 w-5 text-purple-600" />
                Organisation et coopération
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4">
                Nous avons facilité la création de coopératives permettant aux femmes de mutualiser leurs ressources,
                d'améliorer leur pouvoir de négociation et de développer des projets communs.
              </p>
              <div className="mt-4">
                <div className="flex items-center justify-between border-b pb-2 mb-2">
                  <span>Coopératives créées</span>
                  <span className="font-bold">3</span>
                </div>
                <div className="flex items-center justify-between border-b pb-2 mb-2">
                  <span>Femmes membres des coopératives</span>
                  <span className="font-bold">75</span>
                </div>
                <div className="flex items-center justify-between border-b pb-2 mb-2">
                  <span>Projets communs développés</span>
                  <span className="font-bold">5</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Partenariats commerciaux établis</span>
                  <span className="font-bold">4</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Équipements fournis</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm border text-center">
              <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-teal-600"
                >
                  <rect x="2" y="2" width="20" height="20" rx="2" ry="2"></rect>
                  <line x1="8" y1="2" x2="8" y2="22"></line>
                  <line x1="16" y1="2" x2="16" y2="22"></line>
                  <line x1="2" y1="12" x2="22" y2="12"></line>
                </svg>
              </div>
              <h3 className="text-lg font-medium mb-2">Réfrigérateurs</h3>
              <div className="text-3xl font-bold text-teal-600 mb-2">12</div>
              <p className="text-gray-600 text-sm">Distribués à Mbour, Joal et Kayar</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border text-center">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-amber-600"
                >
                  <path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3"></path>
                </svg>
              </div>
              <h3 className="text-lg font-medium mb-2">Fours écologiques</h3>
              <div className="text-3xl font-bold text-amber-600 mb-2">8</div>
              <p className="text-gray-600 text-sm">Installés à Mbour et Joal</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-blue-600"
                >
                  <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                  <line x1="3" y1="9" x2="21" y2="9"></line>
                  <line x1="9" y1="21" x2="9" y2="9"></line>
                </svg>
              </div>
              <h3 className="text-lg font-medium mb-2">Tables hygiéniques</h3>
              <div className="text-3xl font-bold text-blue-600 mb-2">15</div>
              <p className="text-gray-600 text-sm">Distribuées dans les trois sites</p>
            </div>
          </div>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Témoignages d'impact</h2>

          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-sm border">
              <div className="flex flex-col md:flex-row md:items-center mb-4">
                <div className="flex-shrink-0 mb-4 md:mb-0 md:mr-4">
                  <div className="w-16 h-16 rounded-full overflow-hidden">
                    <Image
                      src="/placeholder.svg?height=64&width=64"
                      alt="Portrait de Fatou Diop"
                      width={64}
                      height={64}
                      className="object-cover w-full h-full"
                    />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-medium">Fatou Diop</h3>
                  <p className="text-gray-600 text-sm">Transformatrice à Mbour depuis 15 ans</p>
                </div>
              </div>
              <blockquote className="italic text-gray-700 mb-4">
                "Avant, je perdais beaucoup de poisson pendant la saison chaude. Maintenant, avec le réfrigérateur, je
                peux conserver mon produit plus longtemps et le vendre au meilleur prix. Mes revenus ont augmenté de
                presque 40% ! Mes enfants peuvent tous aller à l'école et j'ai même pu améliorer notre maison."
              </blockquote>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border">
              <div className="flex flex-col md:flex-row md:items-center mb-4">
                <div className="flex-shrink-0 mb-4 md:mb-0 md:mr-4">
                  <div className="w-16 h-16 rounded-full overflow-hidden">
                    <Image
                      src="/placeholder.svg?height=64&width=64"
                      alt="Portrait de Aminata Seck"
                      width={64}
                      height={64}
                      className="object-cover w-full h-full"
                    />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-medium">Aminata Seck</h3>
                  <p className="text-gray-600 text-sm">Transformatrice à Joal depuis 20 ans</p>
                </div>
              </div>
              <blockquote className="italic text-gray-700 mb-4">
                "Le four écologique a changé ma vie. Je ne tousse plus comme avant et mes yeux ne brûlent plus
                constamment. En plus, le poisson est mieux fumé et se conserve plus longtemps. Les clients préfèrent mon
                poisson maintenant et sont prêts à payer un peu plus cher pour la qualité."
              </blockquote>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border">
              <div className="flex flex-col md:flex-row md:items-center mb-4">
                <div className="flex-shrink-0 mb-4 md:mb-0 md:mr-4">
                  <div className="w-16 h-16 rounded-full overflow-hidden">
                    <Image
                      src="/placeholder.svg?height=64&width=64"
                      alt="Portrait de Mariama Ndiaye"
                      width={64}
                      height={64}
                      className="object-cover w-full h-full"
                    />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-medium">Mariama Ndiaye</h3>
                  <p className="text-gray-600 text-sm">Présidente de la coopérative de Mbour</p>
                </div>
              </div>
              <blockquote className="italic text-gray-700 mb-4">
                "La création de notre coopérative a tout changé. Ensemble, nous sommes plus fortes. Nous pouvons
                négocier de meilleurs prix avec les pêcheurs et les acheteurs. Avec le fonds de roulement, nous pouvons
                acheter plus de poisson quand le prix est bas. J'ai pu embaucher deux jeunes femmes pour m'aider et nous
                avons même commencé à exporter vers Bamako."
              </blockquote>
            </div>
          </div>
        </div>

        <div className="bg-teal-50 p-8 rounded-lg border border-teal-100 mb-12">
          <h2 className="text-2xl font-bold mb-4 text-teal-800">Nos objectifs pour l'année à venir</h2>

          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-medium mb-2 flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="mr-2 text-teal-600"
                >
                  <circle cx="12" cy="12" r="10"></circle>
                  <polyline points="12 6 12 12 16 14"></polyline>
                </svg>
                Équipements supplémentaires
              </h3>
              <p className="text-gray-700 mb-2">
                Fournir 15 réfrigérateurs, 10 fours écologiques et 20 tables hygiéniques supplémentaires.
              </p>
              <div className="w-full bg-white rounded-full h-2.5">
                <div className="bg-teal-600 h-2.5 rounded-full" style={{ width: "25%" }}></div>
              </div>
              <div className="flex justify-between mt-1 text-sm">
                <span>Objectif: 10M FCFA</span>
                <span className="text-teal-600 font-medium">25% atteint</span>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-medium mb-2 flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="mr-2 text-teal-600"
                >
                  <circle cx="12" cy="12" r="10"></circle>
                  <polyline points="12 6 12 12 16 14"></polyline>
                </svg>
                Extension géographique
              </h3>
              <p className="text-gray-700 mb-2">
                Étendre notre action à deux nouveaux sites : Saint-Louis et Kafountine.
              </p>
              <div className="w-full bg-white rounded-full h-2.5">
                <div className="bg-teal-600 h-2.5 rounded-full" style={{ width: "15%" }}></div>
              </div>
              <div className="flex justify-between mt-1 text-sm">
                <span>Objectif: 8M FCFA</span>
                <span className="text-teal-600 font-medium">15% atteint</span>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-medium mb-2 flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="mr-2 text-teal-600"
                >
                  <circle cx="12" cy="12" r="10"></circle>
                  <polyline points="12 6 12 12 16 14"></polyline>
                </svg>
                Programme de formation étendu
              </h3>
              <p className="text-gray-700 mb-2">
                Former 200 femmes supplémentaires aux normes d'hygiène, à la gestion financière et aux techniques de
                conservation.
              </p>
              <div className="w-full bg-white rounded-full h-2.5">
                <div className="bg-teal-600 h-2.5 rounded-full" style={{ width: "35%" }}></div>
              </div>
              <div className="flex justify-between mt-1 text-sm">
                <span>Objectif: 5M FCFA</span>
                <span className="text-teal-600 font-medium">35% atteint</span>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-medium mb-2 flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="mr-2 text-teal-600"
                >
                  <circle cx="12" cy="12" r="10"></circle>
                  <polyline points="12 6 12 12 16 14"></polyline>
                </svg>
                Développement des marchés
              </h3>
              <p className="text-gray-700 mb-2">
                Établir des partenariats commerciaux avec des hôtels, restaurants et exportateurs pour valoriser les
                produits.
              </p>
              <div className="w-full bg-white rounded-full h-2.5">
                <div className="bg-teal-600 h-2.5 rounded-full" style={{ width: "20%" }}></div>
              </div>
              <div className="flex justify-between mt-1 text-sm">
                <span>Objectif: 3M FCFA</span>
                <span className="text-teal-600 font-medium">20% atteint</span>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center">
          <h2 className="text-2xl font-bold mb-6">Aidez-nous à atteindre nos objectifs</h2>
          <p className="mb-8 max-w-2xl mx-auto">
            Votre soutien est essentiel pour nous permettre de continuer et d'étendre notre action. Chaque don, quel que
            soit son montant, contribue directement à améliorer la vie des femmes transformatrices de poisson et de
            leurs communautés.
          </p>
          <Button asChild size="lg" className="bg-amber-500 hover:bg-amber-600 text-white">
            <Link href="/don">Faire un Don</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
