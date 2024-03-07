import { CardTitle, CardDescription, CardHeader, CardContent, Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Input } from "@/components/ui/input"

export function ItemView() {
  return (
    <div className="flex flex-col min-h-screen">

      <header className="flex items-center h-14 gap-4 mb-10 px-6 lg:gap-8 lg:h-20 bg-gray-100/40 dark:bg-gray-800/40">

        <Link className="flex items-center gap-2 font-semibold lg:ml-auto" href="#">
          <span className="">Ritzy Marketplace</span>
        </Link>
        <form className="ml-auto flex-1 lg:ml-0">
          <div className="relative">
            <SearchIcon className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500 dark:text-gray-400" />
            <Input
              className="w-full bg-white shadow-none appearance-none pl-8 md:w-2/3 lg:w-1/3 dark:bg-gray-950"
              placeholder="Search NFTs..."
              type="search"
            />
          </div>
        </form>
        <Button className="lg:ml-4" size="sm" variant="outline">
          Connect Wallet
        </Button>
      </header>


      <div className="grid gap-4 lg:grid-cols-[400px_1fr] xl:grid-cols-[600px_1fr] max-w-6xl mx-auto px-4">
        <div className="grid gap-4">
          <div className="grid gap-4">
            <img
              alt="NFT Image"
              className="aspect-square object-cover border border-gray-200 w-full rounded-lg overflow-hidden dark:border-gray-800 dark:border-gray-800"
              height={600}
              src="/images/ferraridrop.jpg"
              width={600}
            />
            <div className="grid gap-2">
              <h1 className="font-semibold text-2xl">Glimmer Lamps</h1>
              <p className="text-sm leading-normal">
                Glimmer Lamps are the perfect addition to any room, emitting a soft and warm light that creates a cozy
                atmosphere. These handcrafted lamps are made with care and attention to detail, ensuring that each one is
                a unique work of art. The base of the lamp is made from sustainably sourced wood, adding a natural and
                organic touch to the design. The lampshade is adorned with delicate crystals that catch the light,
                creating a beautiful shimmering effect. Whether you're looking to add a touch of elegance to your home or
                searching for the perfect gift, Glimmer Lamps are sure to impress.
              </p>
            </div>
          </div>
          <div className="grid gap-4">
            <h2 className="font-semibold text-xl">Additional Information</h2>
            <dl className="grid gap-2 text-sm">
              <div className="grid grid-cols-2 items-start">
                <dt className="font-medium">Creator</dt>
                <dd className="text-sm font-normal">Artisan Designs</dd>
              </div>
              <div className="grid grid-cols-2 items-start">
                <dt className="font-medium">Token ID</dt>
                <dd className="text-sm font-normal">0x4b3f2c3a6b4c</dd>
              </div>
              <div className="grid grid-cols-2 items-start">
                <dt className="font-medium">Contract Address</dt>
                <dd className="text-sm font-normal">0x495f947276749ce646f68ac8c248420045cb7b5e</dd>
              </div>
            </dl>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <div className="grid gap-4">
            <Card>
              <CardHeader>
                <CardTitle>Price</CardTitle>
              </CardHeader>
              <CardContent className="flex flex-col gap-2">
                <div className="font-semibold text-2xl">0.05 ETH</div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Owner</CardTitle>
                <CardDescription>The current owner of this NFT</CardDescription>
              </CardHeader>
              <CardContent className="flex items-center gap-2">
                <img
                  alt="Avatar"
                  className="rounded-full"
                  height="32"
                  src="/placeholder.svg"
                  style={{
                    aspectRatio: "32/32",
                    objectFit: "cover",
                  }}
                  width="32"
                />
                <div className="text-sm font-medium">CryptoCollector123</div>
              </CardContent>
            </Card>
          </div>
          <div className="flex flex-col gap-4 min-[400px]:flex-row">
            <Button size="lg">Purchase NFT</Button>
            <Button size="lg" variant="outline">
              <PlusIcon className="w-4 h-4 mr-2" />
              List NFT for Sale
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}


function PlusIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 12h14" />
      <path d="M12 5v14" />
    </svg>
  )
}




function SearchIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  )
}