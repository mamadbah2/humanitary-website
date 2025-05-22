import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function DefisPage() {
  return (
    <div className="container mx-auto py-12 px-4 md:px-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold mb-6">Leurs Défis</h1>

        <div className="relative w-full h-[400px] mb-8 rounded-lg overflow-hidden">
          <Image
            src="/images/img4.jpg"
            alt="Femmes transformatrices de poisson au travail dans des conditions difficiles"
            width={1000}
            height={400}
            className="object-cover w-full h-full"
          />
        </div>

        <div className="prose max-w-none mb-12">
          <p className="lead text-xl">
            Malgré leur rôle crucial dans l'économie locale et la sécurité alimentaire, les femmes transformatrices de
            poisson au Sénégal font face à de nombreux défis qui limitent leur potentiel et affectent leur santé et leur
            bien-être.
          </p>

          <p>
            Comprendre ces défis est essentiel pour développer des solutions adaptées et durables. Voici les principaux
            obstacles auxquels ces femmes sont confrontées quotidiennement :
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-teal-700">Conditions de travail précaires</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <div className="mr-2 mt-1 bg-teal-500 rounded-full p-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="12"
                      height="12"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-white"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <span>Exposition prolongée à la fumée des fours traditionnels</span>
                </li>
                <li className="flex items-start">
                  <div className="mr-2 mt-1 bg-teal-500 rounded-full p-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="12"
                      height="12"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-white"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <span>Problèmes respiratoires et oculaires fréquents</span>
                </li>
                <li className="flex items-start">
                  <div className="mr-2 mt-1 bg-teal-500 rounded-full p-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="12"
                      height="12"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-white"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <span>Infrastructures inadéquates et non hygiéniques</span>
                </li>
                <li className="flex items-start">
                  <div className="mr-2 mt-1 bg-teal-500 rounded-full p-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="12"
                      height="12"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-white"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <span>Journées de travail extrêmement longues</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-amber-700">Manque d'équipements modernes</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <div className="mr-2 mt-1 bg-amber-500 rounded-full p-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="12"
                      height="12"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-white"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <span>Absence de réfrigération entraînant des pertes importantes</span>
                </li>
                <li className="flex items-start">
                  <div className="mr-2 mt-1 bg-amber-500 rounded-full p-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="12"
                      height="12"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-white"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <span>Fours traditionnels inefficaces et polluants</span>
                </li>
                <li className="flex items-start">
                  <div className="mr-2 mt-1 bg-amber-500 rounded-full p-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="12"
                      height="12"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-white"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <span>Outils de travail rudimentaires</span>
                </li>
                <li className="flex items-start">
                  <div className="mr-2 mt-1 bg-amber-500 rounded-full p-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="12"
                      height="12"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-white"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <span>Manque de moyens de transport adaptés</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-blue-700">Difficultés économiques</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <div className="mr-2 mt-1 bg-blue-500 rounded-full p-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="12"
                      height="12"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-white"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <span>Accès limité au crédit et aux services financiers</span>
                </li>
                <li className="flex items-start">
                  <div className="mr-2 mt-1 bg-blue-500 rounded-full p-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="12"
                      height="12"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-white"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <span>Fluctuation des prix du poisson frais</span>
                </li>
                <li className="flex items-start">
                  <div className="mr-2 mt-1 bg-blue-500 rounded-full p-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="12"
                      height="12"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-white"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <span>Manque de fonds de roulement</span>
                </li>
                <li className="flex items-start">
                  <div className="mr-2 mt-1 bg-blue-500 rounded-full p-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="12"
                      height="12"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-white"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <span>Revenus instables et souvent insuffisants</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-purple-700">Défis environnementaux et structurels</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <div className="mr-2 mt-1 bg-purple-500 rounded-full p-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="12"
                      height="12"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-white"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <span>Raréfaction de la ressource due à la surpêche</span>
                </li>
                <li className="flex items-start">
                  <div className="mr-2 mt-1 bg-purple-500 rounded-full p-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="12"
                      height="12"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-white"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <span>Changement climatique perturbant les cycles de pêche</span>
                </li>
                <li className="flex items-start">
                  <div className="mr-2 mt-1 bg-purple-500 rounded-full p-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="12"
                      height="12"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-white"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <span>Concurrence des grandes industries de transformation</span>
                </li>
                <li className="flex items-start">
                  <div className="mr-2 mt-1 bg-purple-500 rounded-full p-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="12"
                      height="12"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-white"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <span>Manque de reconnaissance officielle du métier</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <div className="bg-gray-50 p-6 rounded-lg mb-12">
          <h2 className="text-2xl font-bold mb-4">Impact sur la santé</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-medium mb-2 text-red-700">Problèmes respiratoires</h3>
              <p className="text-gray-700 mb-4">
                L'exposition quotidienne à la fumée des fours traditionnels provoque des problèmes respiratoires
                chroniques. Une étude menée dans la région de Mbour a révélé que 78% des femmes transformatrices
                souffrent de toux chronique et 45% présentent des symptômes d'asthme.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-medium mb-2 text-red-700">Problèmes oculaires</h3>
              <p className="text-gray-700 mb-4">
                La fumée irrite également les yeux, causant des conjonctivites récurrentes et, à long terme, des
                problèmes de vision plus graves. 62% des femmes interrogées rapportent des problèmes oculaires
                réguliers.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-medium mb-2 text-red-700">Troubles musculo-squelettiques</h3>
              <p className="text-gray-700 mb-4">
                Les longues heures passées debout, les mouvements répétitifs et le port de charges lourdes entraînent
                des douleurs chroniques au dos, aux épaules et aux articulations.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-medium mb-2 text-red-700">Brûlures et coupures</h3>
              <p className="text-gray-700 mb-4">
                Les accidents de travail sont fréquents en raison du manque d'équipements de protection et de la nature
                dangereuse du travail avec des fours à haute température et des outils tranchants.
              </p>
            </div>
          </div>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Témoignages</h2>

          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-sm border">
              <blockquote className="italic text-gray-700 mb-4">
                "Quand j'ai commencé ce métier il y a 30 ans, il y avait beaucoup de poisson. Maintenant, c'est de plus
                en plus difficile d'en trouver, et les prix ont beaucoup augmenté. Parfois, je ne peux pas acheter assez
                de poisson pour que mon travail soit rentable."
              </blockquote>
              <p className="font-medium">— Mariama Diallo, Kayar</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border">
              <blockquote className="italic text-gray-700 mb-4">
                "La fumée me fait tellement souffrir. Mes yeux brûlent constamment et je tousse toute la nuit. Le
                médecin m'a dit que mes poumons sont abîmés, mais que puis-je faire ? C'est mon seul moyen de nourrir
                mes enfants."
              </blockquote>
              <p className="font-medium">— Fatou Seck, Mbour</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border">
              <blockquote className="italic text-gray-700 mb-4">
                "Pendant la saison chaude, nous perdons beaucoup de poisson qui se gâte rapidement. Si nous avions des
                réfrigérateurs, nous pourrions conserver notre produit plus longtemps et le vendre au meilleur prix, au
                lieu de devoir baisser les prix quand le poisson commence à se détériorer."
              </blockquote>
              <p className="font-medium">— Aïssatou Ndiaye, Joal</p>
            </div>
          </div>
        </div>

        <div className="bg-teal-50 p-8 rounded-lg border border-teal-100 mb-12">
          <h2 className="text-2xl font-bold mb-4 text-teal-800">Nos Solutions</h2>
          <p className="mb-6">
            Face à ces défis, nous avons développé des solutions concrètes et adaptées aux besoins spécifiques des
            femmes transformatrices de poisson :
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex items-start">
              <div className="mr-4 mt-1 bg-teal-500 rounded-full p-2">
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
                  className="text-white"
                >
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                  <polyline points="22 4 12 14.01 9 11.01"></polyline>
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-medium mb-2">Équipements modernes</h3>
                <p className="text-gray-700">
                  Fourniture de réfrigérateurs, fours écologiques et tables de travail hygiéniques pour améliorer les
                  conditions de travail et la qualité des produits.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="mr-4 mt-1 bg-teal-500 rounded-full p-2">
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
                  className="text-white"
                >
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                  <polyline points="22 4 12 14.01 9 11.01"></polyline>
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-medium mb-2">Formation</h3>
                <p className="text-gray-700">
                  Organisation de sessions de formation sur les normes d'hygiène, la gestion financière et les
                  techniques de conservation.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="mr-4 mt-1 bg-teal-500 rounded-full p-2">
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
                  className="text-white"
                >
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                  <polyline points="22 4 12 14.01 9 11.01"></polyline>
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-medium mb-2">Fonds de roulement</h3>
                <p className="text-gray-700">
                  Création d'un fonds permettant aux femmes d'acheter du poisson en plus grande quantité et à meilleur
                  prix, améliorant ainsi leur marge bénéficiaire.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="mr-4 mt-1 bg-teal-500 rounded-full p-2">
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
                  className="text-white"
                >
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                  <polyline points="22 4 12 14.01 9 11.01"></polyline>
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-medium mb-2">Accès aux marchés</h3>
                <p className="text-gray-700">
                  Facilitation de l'accès aux marchés nationaux et internationaux pour valoriser les produits et
                  augmenter les revenus.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center">
          <h2 className="text-2xl font-bold mb-6">Ensemble, nous pouvons faire la différence</h2>
          <p className="mb-8 max-w-2xl mx-auto">
            Votre soutien est essentiel pour aider ces femmes à surmonter ces défis et à construire un avenir meilleur
            pour elles et leurs familles. Chaque contribution, quelle que soit sa taille, a un impact direct sur leur
            vie quotidienne.
          </p>
          <Button asChild size="lg" className="bg-amber-500 hover:bg-amber-600 text-white">
            <Link href="/don">Faire un Don</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
