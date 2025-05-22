import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function NotreHistoirePage() {
  return (
    <div className="container mx-auto py-12 px-4 md:px-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold mb-6">Notre Histoire</h1>

        <div className="relative w-full h-[400px] mb-8 rounded-lg overflow-hidden">
          <Image
            src="/images/img3.jpg"
            alt="Femmes transformatrices de poisson au travail"
            width={1000}
            height={400}
            className="object-cover w-full h-full"
          />
        </div>

        <div className="prose max-w-none">
          <h2>Les Gardiennes d'un Savoir-Faire Ancestral</h2>
          <p>
            Au Sénégal, le long des côtes de l'océan Atlantique, des milliers de femmes perpétuent un savoir-faire
            ancestral : la transformation du poisson. Ce métier, transmis de génération en génération, est bien plus
            qu'une simple activité économique. Il est le pilier de communautés entières, assurant la sécurité
            alimentaire et préservant un patrimoine culturel inestimable.
          </p>

          <p>
            Ces femmes, souvent cheffes de famille, se lèvent avant l'aube pour accueillir les pirogues des pêcheurs.
            Elles achètent le poisson frais, le nettoient, le salent, le sèchent ou le fument selon des techniques
            traditionnelles. Le produit final, riche en protéines et se conservant longtemps sans réfrigération, est
            ensuite vendu sur les marchés locaux ou exporté vers d'autres pays africains.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-8">
            <div className="rounded-lg overflow-hidden">
              <Image
                src="/images/img4.jpg"
                alt="Femme transformant du poisson"
                width={500}
                height={300}
                className="object-cover w-full h-full"
              />
            </div>
            <div className="rounded-lg overflow-hidden">
              <Image
                src="/images/img11.jpg"
                alt="Site de transformation de poisson"
                width={500}
                height={300}
                className="object-cover w-full h-full"
              />
            </div>
          </div>

          <h2>Des Défis Quotidiens</h2>
          <p>
            Malgré leur rôle crucial, ces femmes travaillent dans des conditions extrêmement difficiles. Sans équipement
            moderne, elles sont exposées à la fumée des fours traditionnels, causant des problèmes respiratoires et
            oculaires. Le manque de réfrigération entraîne des pertes importantes, surtout pendant la saison chaude.
            L'accès limité au crédit les empêche d'investir dans du matériel plus performant.
          </p>

          <p>
            De plus, ces femmes font face à une concurrence croissante des grandes industries de transformation, à la
            raréfaction de la ressource due à la surpêche, et aux effets du changement climatique qui perturbent les
            cycles de pêche traditionnels.
          </p>

          <h2>Notre Mission</h2>
          <p>
            Face à ces défis, notre mission est claire : améliorer les conditions de travail des femmes transformatrices
            de poisson au Sénégal, valoriser leur métier et renforcer leur autonomie économique. Nous croyons fermement
            que soutenir ces femmes, c'est soutenir des communautés entières.
          </p>

          <p>Concrètement, nous nous engageons à :</p>

          <ul>
            <li>
              Fournir des équipements modernes et adaptés : réfrigérateurs, fours écologiques, tables de travail
              hygiéniques
            </li>
            <li>
              Organiser des formations sur les normes d'hygiène, la gestion financière et les techniques de conservation
            </li>
            <li>
              Créer un fonds de roulement pour permettre aux femmes d'acheter du poisson en plus grande quantité et à
              meilleur prix
            </li>
            <li>Faciliter l'accès aux marchés nationaux et internationaux pour leurs produits</li>
            <li>
              Sensibiliser le public et les autorités à l'importance de ce métier et aux défis auxquels ces femmes font
              face
            </li>
          </ul>

          <h2>Notre Impact</h2>
          <p>Depuis le début de notre initiative, nous avons déjà pu observer des changements significatifs :</p>

          <ul>
            <li>Réduction de 40% des problèmes de santé liés à la fumée grâce aux nouveaux fours</li>
            <li>Augmentation moyenne de 30% des revenus des femmes équipées de réfrigérateurs</li>
            <li>Formation de 120 femmes aux normes d'hygiène et à la gestion financière</li>
            <li>Création de trois coopératives permettant aux femmes de mutualiser leurs ressources</li>
          </ul>

          <p>
            Mais il reste encore beaucoup à faire. Avec votre soutien, nous pouvons étendre notre action à plus de
            communautés et avoir un impact encore plus grand sur la vie de ces femmes et de leurs familles.
          </p>

          <div className="my-8 p-6 bg-teal-50 rounded-lg border border-teal-100">
            <h3 className="text-xl font-bold text-teal-800 mb-4">Témoignage</h3>
            <blockquote className="italic text-gray-700">
              "Avant, je perdais beaucoup de poisson pendant la saison chaude. Maintenant, avec le réfrigérateur, je
              peux conserver mon produit plus longtemps et le vendre au meilleur prix. Mes enfants peuvent tous aller à
              l'école et j'ai même pu améliorer notre maison. Ce métier est difficile, mais c'est notre fierté et notre
              héritage."
            </blockquote>
            <p className="mt-4 font-medium">— Aïda Sarr, transformatrice à Mbour depuis 25 ans</p>
          </div>
        </div>

        <div className="mt-12 text-center">
          <h3 className="text-xl font-bold mb-4">Rejoignez-nous dans cette mission</h3>
          <p className="mb-6">
            Votre soutien peut faire une différence réelle dans la vie de ces femmes et de leurs communautés.
          </p>
          <Button asChild size="lg" className="bg-amber-500 hover:bg-amber-600 text-white">
            <Link href="/don">Faire un Don</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
