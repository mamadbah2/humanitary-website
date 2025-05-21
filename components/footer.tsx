import Link from "next/link"
import { Facebook, Twitter, Instagram, Mail, Phone, MapPin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-teal-800 text-white">
      <div className="container mx-auto px-4 md:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-bold mb-4">Femmes Transformatrices</h3>
            <p className="text-teal-100 mb-4">
              Soutenez les artisanes de la mer au Sénégal et offrons-leur un avenir meilleur.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-teal-100 hover:text-white">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-teal-100 hover:text-white">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="text-teal-100 hover:text-white">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Liens Rapides</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-teal-100 hover:text-white">
                  Accueil
                </Link>
              </li>
              <li>
                <Link href="/notre-histoire" className="text-teal-100 hover:text-white">
                  Notre Histoire
                </Link>
              </li>
              <li>
                <Link href="/defis" className="text-teal-100 hover:text-white">
                  Leurs Défis
                </Link>
              </li>
              <li>
                <Link href="/notre-impact" className="text-teal-100 hover:text-white">
                  Notre Impact
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-teal-100 hover:text-white">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Légal</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/mentions-legales" className="text-teal-100 hover:text-white">
                  Mentions Légales
                </Link>
              </li>
              <li>
                <Link href="/politique-de-confidentialite" className="text-teal-100 hover:text-white">
                  Politique de Confidentialité
                </Link>
              </li>
              <li>
                <Link href="/cgu-cgd" className="text-teal-100 hover:text-white">
                  Conditions Générales
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-2 text-teal-300" />
                <a href="mailto:contact@femmes-transformatrices.org" className="text-teal-100 hover:text-white">
                  contact@femmes-transformatrices.org
                </a>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-2 text-teal-300" />
                <a href="tel:+221123456789" className="text-teal-100 hover:text-white">
                  +221 12 345 67 89
                </a>
              </li>
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-2 text-teal-300 mt-1" />
                <span className="text-teal-100">
                  123 Rue de la Mer
                  <br />
                  Dakar, Sénégal
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-teal-700 mt-8 pt-8 text-center text-teal-100">
          <p>&copy; {new Date().getFullYear()} Femmes Transformatrices de Poisson. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  )
}
