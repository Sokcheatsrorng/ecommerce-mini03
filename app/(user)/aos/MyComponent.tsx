import { Card, CardFooter, Image, Button, CardHeader } from "@nextui-org/react";

function MyComponent() {
  return (
    <div className="container mx-auto flex flex-col justify-between items-center py-8 mt-2 lg:w-[67%] md:flex-row md:p-6 p-6">
      <div className="w-full md:w-1/2 mb-8 md:mb-0 md:mr-8 " data-aos="zoom-in">
        <Card isFooterBlurred radius="lg" className="border-1 hover:border-blue-900 bg-none h-[555px] py-8 shadow-none">
          <Image
            alt="Hoodie"
            className="object-cover hover:scale-110 transition-transform"
            height={500}
            width={500}
            src="./assets/saleor-grey-hoodie_thumbnail_1024.webp"
          />
          <CardFooter className="justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large lg:bottom-1/3 bottom-1/2 lg:w-[calc(50%_-_8px)] shadow-small left-[15px] z-10 md:w-[calc(70%_-_8px)] w-[calc(80%_-_8px)] ">
            <p className="text-tiny text-orange-500 font-medium">Saleor Grey Hoodie</p>
            <Button className="text-tiny bg-gradient-to-tr from-blue-500 to-yellow-200 text-blue-900" variant="flat" color="default" radius="lg" size="sm">
              20.0$
            </Button>
          </CardFooter>
        </Card>
      </div>

      <div className="w-full md:w-1/2 text-center md:text-left" data-aos="fade-left">
        <div className="banner rounded-lg">
          <Card isFooterBlurred className="w-full h-[270px] border-1 hover:border-blue-900 shadow-none">
            <CardHeader className="absolute z-10 top-1 flex-col items-start">
              <span className="font-medium text-blue-900">New</span>
            </CardHeader>
            <Image
              removeWrapper
              alt="Relaxing app background"
              className="z-0 w-full h-full object-cover hover:scale-110 transition-transform"
              src="./assets/saleor-dash-force-1_thumbnail_1024.webp"
            />
            <CardFooter className="justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-4 lg:w-[calc(50%_-_8px)] shadow-small left-[15px] z-10 md:w-[calc(70%_-_8px)] w-[calc(80%_-_8px)]">
              <p className="text-tiny text-orange-500 font-medium">Saleor Dash Force</p>
              <Button className="text-tiny bg-gradient-to-tr from-blue-500 to-yellow-200 text-blue-900" variant="flat" color="default" radius="lg" size="sm">
                34.5$
              </Button>
            </CardFooter>
          </Card>
        </div>
        <div className="banner mt-4 rounded-lg">
          <Card isFooterBlurred className="w-full h-[270px] border-1 hover:border-blue-900 shadow-none">
            <CardHeader className="absolute z-10 top-1 flex-col items-start">
              <span className="font-medium text-warning">Arrived</span>
            </CardHeader>
            <Image
              removeWrapper
              alt="Relaxing app background"
              className="z-0 w-full h-full object-cover hover:scale-110 transition-transform"
              src="./assets/saleor-beanie-1_thumbnail_1024.webp"
            />
            <CardFooter className="justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-4 lg:w-[calc(50%_-_8px)] shadow-small left-[15px] z-10 md:w-[calc(70%_-_8px)] w-[calc(80%_-_8px)]">
              <p className="text-tiny text-orange-500 font-medium">Saleor Beanie Blue</p>
              <Button className="text-tiny bg-gradient-to-tr from-blue-500 to-yellow-200 text-blue-900" variant="flat" color="default" radius="lg" size="sm">
                17.75$
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default MyComponent;
