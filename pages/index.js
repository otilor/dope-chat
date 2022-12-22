import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import { FunnelIcon, CheckIcon, VideoCameraIcon, PhoneIcon } from "@heroicons/react/24/outline";
import Profiles from "../components/Profiles";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Tailwind CSS</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div className="flex">
          <div className="w-1/5 py-8">
            <div className="inline-flex items-baseline">
              <div className="relative rounded-md shadow-sm">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <MagnifyingGlassIcon
                    className="h-5 w-5 ml-2 text-gray-600"
                    aria-hidden="true"
                  />
                </div>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="bg-gray-200 ml-2  p-2 block w-full pl-10 sm:text-sm border-gray-300 rounded-md"
                  placeholder="Search or start new chat"
                />
              </div>
              <div>
                <FunnelIcon className="ml-4 align-text-bottom text-gray-600 w-4" />
              </div>
            </div>
            <div>
              <Profiles />
            </div>
          </div>

          <div className="w-4/5">
            <div className="sm:grid-cols-2">
              <div
                key=""
                className="relative border border-gray-300 bg-white px-6 py-5 shadow-sm flex items-center space-x-3 hover:border-gray-400 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
              >
                <div className="flex-shrink-0">
                  <img
                    className="h-10 w-10 rounded-full"
                    src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt=""
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <a href="#" className="focus:outline-none">
                    <span className="absolute inset-0" aria-hidden="true" />
                    <p className="text-sm font-medium text-gray-900">Azzuri</p>
                    <div className="inline-flex items-baseline">
                      <p className="text-sm text-gray-500 truncate">
                        last seen at 15:08
                      </p>
                        <div class="absolute mt-5 flex items-baseline top-0 right-0 h-16 w-16">
                          <VideoCameraIcon className="w-4 m-2 h-4"/>
                          <PhoneIcon className="w-4 h-4 m-2"/>
                        </div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
