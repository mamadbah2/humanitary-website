import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Image from "next/image"

export default function DonPage() {
  return (
    <div className="container mx-auto py-12 px-4 md:px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Contribuez Maintenant et Faites la Différence</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Votre don aide directement les femmes transformatrices de poisson au Sénégal à améliorer leurs conditions de
            travail et à assurer un avenir meilleur pour leurs familles.
          </p>
        </div>

        <div className="mb-10">
          <div className="bg-gray-100 rounded-lg p-6 mb-8">
            <div className="flex flex-col md:flex-row justify-between items-center mb-4">
              <div>
                <h3 className="text-lg font-medium">Objectif total</h3>
                <p className="text-2xl font-bold">15 000 000 FCFA</p>
              </div>
              <div>
                <h3 className="text-lg font-medium">Collectés jusqu'à présent</h3>
                <p className="text-2xl font-bold text-teal-600">6 250 000 FCFA</p>
              </div>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-4">
              <div className="bg-teal-600 h-4 rounded-full" style={{ width: "42%" }}></div>
            </div>
            <p className="text-right mt-2 text-sm text-gray-600">42% de l'objectif atteint</p>
          </div>

          <Card>
            <CardContent className="pt-6">
              <form>
                <div className="mb-8">
                  <h3 className="text-lg font-medium mb-4">Choisissez le montant de votre don</h3>
                  <RadioGroup defaultValue="10000" className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                    <div>
                      <RadioGroupItem value="5000" id="amount-5000" className="peer sr-only" />
                      <Label
                        htmlFor="amount-5000"
                        className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-teal-600 [&:has([data-state=checked])]:border-teal-600 cursor-pointer"
                      >
                        <span className="text-xl font-bold">5 000</span>
                        <span className="text-sm">FCFA</span>
                      </Label>
                    </div>
                    <div>
                      <RadioGroupItem value="10000" id="amount-10000" className="peer sr-only" />
                      <Label
                        htmlFor="amount-10000"
                        className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-teal-600 [&:has([data-state=checked])]:border-teal-600 cursor-pointer"
                      >
                        <span className="text-xl font-bold">10 000</span>
                        <span className="text-sm">FCFA</span>
                      </Label>
                    </div>
                    <div>
                      <RadioGroupItem value="25000" id="amount-25000" className="peer sr-only" />
                      <Label
                        htmlFor="amount-25000"
                        className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-teal-600 [&:has([data-state=checked])]:border-teal-600 cursor-pointer"
                      >
                        <span className="text-xl font-bold">25 000</span>
                        <span className="text-sm">FCFA</span>
                      </Label>
                    </div>
                    <div>
                      <RadioGroupItem value="50000" id="amount-50000" className="peer sr-only" />
                      <Label
                        htmlFor="amount-50000"
                        className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-teal-600 [&:has([data-state=checked])]:border-teal-600 cursor-pointer"
                      >
                        <span className="text-xl font-bold">50 000</span>
                        <span className="text-sm">FCFA</span>
                      </Label>
                    </div>
                  </RadioGroup>

                  <div className="mt-4">
                    <Label htmlFor="custom-amount">Ou entrez un montant personnalisé</Label>
                    <div className="flex items-center mt-2">
                      <Input id="custom-amount" type="number" placeholder="Montant" className="rounded-r-none" />
                      <div className="bg-gray-100 border border-l-0 border-input px-3 py-2 rounded-r-md">FCFA</div>
                    </div>
                  </div>
                </div>

                <div className="mb-8">
                  <h3 className="text-lg font-medium mb-4">Vos informations (optionnel)</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="first-name">Prénom</Label>
                      <Input id="first-name" className="mt-1" />
                    </div>
                    <div>
                      <Label htmlFor="last-name">Nom</Label>
                      <Input id="last-name" className="mt-1" />
                    </div>
                    <div className="md:col-span-2">
                      <Label htmlFor="email">Email (pour reçu et remerciements)</Label>
                      <Input id="email" type="email" className="mt-1" />
                    </div>
                  </div>
                </div>

                <div className="mb-8">
                  <h3 className="text-lg font-medium mb-4">Choisissez votre moyen de paiement</h3>
                  <Tabs defaultValue="wave" className="w-full">
                    <TabsList className="grid w-full grid-cols-2">
                      <TabsTrigger value="wave">Wave</TabsTrigger>
                      <TabsTrigger value="orange">Orange Money</TabsTrigger>
                    </TabsList>
                    <TabsContent value="wave" className="p-4 border rounded-md mt-2">
                      <div className="flex items-center space-x-4">
                        <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
                          <Image
                            src="https://goamobile.com/logosent/wave@221@-P-2021-06-30_00-18-27wave_logo_2.png"
                            alt="Wave Logo"
                            width={40}
                            height={40}
                            className="object-contain"
                          />
                        </div>
                        <div>
                          <h4 className="font-medium">Payer avec Wave</h4>
                          <p className="text-sm text-gray-600">
                            Vous recevrez un message sur votre téléphone pour confirmer le paiement.
                          </p>
                        </div>
                      </div>
                    </TabsContent>
                    <TabsContent value="orange" className="p-4 border rounded-md mt-2">
                      <div className="flex items-center space-x-4">
                        <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center">
                          <Image
                            src="https://play-lh.googleusercontent.com/T4ZLP7nx1kM6oXacVqAlCqQ5d11xc1NPdC9i3iofouWGIuXXo9QW0FsQJGA01AEblDRo"
                            alt="Orange Money Logo"
                            width={40}
                            height={40}
                            className="object-contain"
                          />
                        </div>
                        <div>
                          <h4 className="font-medium">Payer avec Orange Money</h4>
                          <p className="text-sm text-gray-600">
                            Vous recevrez un message sur votre téléphone pour confirmer le paiement.
                          </p>
                        </div>
                      </div>
                    </TabsContent>
                  </Tabs>
                </div>

                <div className="flex items-start space-x-2 mb-8">
                  <Checkbox id="terms" />
                  <div className="grid gap-1.5 leading-none">
                    <label
                      htmlFor="terms"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      J'accepte les conditions générales d'utilisation et la politique de confidentialité
                    </label>
                    <p className="text-sm text-gray-500">
                      Vos données personnelles ne seront utilisées que pour vous envoyer un reçu et des remerciements.
                    </p>
                  </div>
                </div>

                <Button type="submit" className="w-full bg-amber-500 hover:bg-amber-600 text-white" size="lg">
                  Confirmer mon don
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>

        <div className="bg-gray-50 rounded-lg p-6">
          <h3 className="text-lg font-medium mb-4">Comment votre don est utilisé</h3>
          <ul className="space-y-2">
            <li className="flex items-start">
              <div className="mr-2 mt-1 bg-teal-500 rounded-full p-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
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
              <span>85% directement pour l'achat d'équipements et la formation des femmes</span>
            </li>
            <li className="flex items-start">
              <div className="mr-2 mt-1 bg-teal-500 rounded-full p-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
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
              <span>10% pour la logistique et le transport des équipements</span>
            </li>
            <li className="flex items-start">
              <div className="mr-2 mt-1 bg-teal-500 rounded-full p-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
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
              <span>5% pour les frais administratifs et de communication</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
