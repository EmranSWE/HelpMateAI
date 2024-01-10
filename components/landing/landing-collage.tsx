import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import car from "../../assets/plane.png";
import horse from "../../assets/horse.png";
import ship from "../../assets/car.png";
import Image from "next/image";
export function LandingCollage() {
  return (
    <>
      <div className="text-center mt-3 text-white">
        <h1 className="text-4xl font-extrabold  text-gradient">
          Design Your Dream
        </h1>
        <p>
          <span>With our advanced AI model</span>
        </p>
      </div>
      <ResizablePanelGroup
        direction="horizontal"
        className=" rounded-lg border my-5"
      >
        <ResizablePanel defaultSize={50}>
          <div className="flex h-[500px] items-center justify-center p-6">
            <span className="font-semibold">
              <Image alt="image" src={car} width={1200} height={800}></Image>
            </span>
          </div>
        </ResizablePanel>
        <ResizableHandle />
        <ResizablePanel defaultSize={50}>
          <ResizablePanelGroup direction="vertical">
            <ResizablePanel defaultSize={50}>
              <div className="flex h-full items-center justify-center p-6">
                <span className="font-semibold">
                  <Image
                    alt="image"
                    src={horse}
                    width={800}
                    height={800}
                  ></Image>
                </span>
              </div>
            </ResizablePanel>
            <ResizableHandle />
            <ResizablePanel defaultSize={50}>
              <div className="flex h-full items-center justify-center p-6">
                <span className="font-semibold">
                  <Image
                    alt="image"
                    src={ship}
                    width={800}
                    height={800}
                  ></Image>
                </span>
              </div>
            </ResizablePanel>
          </ResizablePanelGroup>
        </ResizablePanel>
      </ResizablePanelGroup>
    </>
  );
}
