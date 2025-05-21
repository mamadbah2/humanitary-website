import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin } from "lucide-react"

export default function ContactPage() {
  return (
    <div className="container mx-auto py-12 px-4 md:px-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold mb-6">Contact</h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="flex items-center">
                <Mail className="mr-2 h-5 w-5 text-teal-600" />
                Email
              </CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                <a href="mailto:contact@femmes-transformatrices.org" className="text-teal-600 hover:underline">
                  contact@femmes-transformatrices.org
                </a>
              </CardDescription>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="flex items-center">
                <Phone className="mr-2 h-5 w-5 text-teal-600" />
                Téléphone
              </CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                <a href="tel:+221123456789" className="text-teal-600 hover:underline">
                  +221 12 345 67 89
                </a>
              </CardDescription>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="flex items-center">
                <MapPin className="mr-2 h-5 w-5 text-teal-600" />
                Adresse
              </CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                123 Rue de la Mer
                <br />
                Dakar, Sénégal
              </CardDescription>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div>
            <h2 className="text-2xl font-bold mb-4">Envoyez-nous un message</h2>
            <p className="text-gray-600 mb-6">
              Vous avez des questions sur notre projet ou vous souhaitez en savoir plus sur comment vous pouvez aider ?
              N'hésitez pas à nous contacter en remplissant le formulaire ci-dessous.
            </p>

            <form className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="first-name">Prénom</Label>
                  <Input id="first-name" placeholder="Votre prénom" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="last-name">Nom</Label>
                  <Input id="last-name" placeholder="Votre nom" />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="votre.email@exemple.com" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="subject">Sujet</Label>
                <Input id="subject" placeholder="Sujet de votre message" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea id="message" placeholder="Votre message" rows={5} />
              </div>

              <Button type="submit" className="w-full">
                Envoyer le message
              </Button>
            </form>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-4">Nos sites d'intervention</h2>
            <p className="text-gray-600 mb-6">
              Nous intervenons actuellement dans trois sites principaux le long de la côte sénégalaise. Chaque site a
              ses spécificités et ses besoins particuliers.
            </p>

            <div className="space-y-4">
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle>Mbour</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600">
                    Principal site de transformation de poisson au Sénégal, Mbour abrite plus de 80 femmes
                    transformatrices organisées en groupements. C'est ici que nous avons commencé notre action.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-2">
                  <CardTitle>Joal</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600">
                    Situé à environ 30 km de Mbour, Joal est connu pour sa production de poisson séché. Nous y soutenons
                    un groupement de 45 femmes transformatrices.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-2">
                  <CardTitle>Kayar</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600">
                    Au nord de Dakar, Kayar est un important centre de pêche artisanale. Nous y avons récemment étendu
                    notre action pour soutenir 25 femmes transformatrices.
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="mt-6">
              <h3 className="text-lg font-medium mb-2">Prochains sites d'intervention</h3>
              <p className="text-gray-600 mb-4">
                Nous prévoyons d'étendre notre action à deux nouveaux sites dans les prochains mois :
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-1">
                <li>Saint-Louis, au nord du pays</li>
                <li>Kafountine, en Casamance</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-gray-50 p-6 rounded-lg">
          <h2 className="text-2xl font-bold mb-4">Foire aux questions</h2>

          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-medium mb-2">Comment puis-je faire un don ?</h3>
              <p className="text-gray-600">
                Vous pouvez faire un don directement sur notre site via la page "Faire un Don". Nous acceptons les
                paiements par Wave et Orange Money, les deux moyens de paiement mobile les plus utilisés au Sénégal.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-medium mb-2">Comment mon don sera-t-il utilisé ?</h3>
              <p className="text-gray-600">
                85% de votre don est directement utilisé pour l'achat d'équipements et la formation des femmes, 10% pour
                la logistique et le transport des équipements, et 5% pour les frais administratifs et de communication.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-medium mb-2">Puis-je visiter les sites de transformation ?</h3>
              <p className="text-gray-600">
                Oui, nous organisons régulièrement des visites pour nos donateurs et partenaires. C'est une excellente
                façon de voir concrètement l'impact de votre soutien. Contactez-nous pour organiser une visite.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-medium mb-2">Comment puis-je devenir bénévole ?</h3>
              <p className="text-gray-600">
                Nous sommes toujours à la recherche de bénévoles pour nous aider dans nos actions sur le terrain,
                notamment pour les formations et la sensibilisation. Si vous avez des compétences particulières
                (formation, communication, technique, etc.), n'hésitez pas à nous contacter.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
