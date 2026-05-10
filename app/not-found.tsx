import Link from 'next/link'
 
export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-6 text-center">
      <h2 className="text-4xl font-bold mb-4">Página não encontrada</h2>
      <p className="text-on-surface/60 mb-8">Desculpe, a página que você procura não existe.</p>
      <Link 
        href="/"
        className="px-6 py-2 bg-primary text-white rounded-xl font-bold hover:scale-105 transition-transform"
      >
        Voltar para o Início
      </Link>
    </div>
  )
}
