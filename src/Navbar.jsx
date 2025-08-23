import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Navbar() {
  return (
    <Disclosure as="nav"
      className="relative w-full bg-gray-800/50">
      <div className="w-full px-2 sm:px-6 lg:px-8">
        <div className="relative w-full flex h-24 items-center justify-normal">
          <div className="absolute w-full inset-y-0 left-0 flex items-center sm:hidden">
            {/* Mobile menu button*/}
            <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-white/5 hover:text-white focus:outline-2 focus:-outline-offset-1 focus:outline-indigo-500">
              <span className="absolute -inset-0.5" />
              <span className="sr-only">Open main menu</span>
              <Bars3Icon aria-hidden="true" className="block size-6 group-data-open:hidden" />
              <XMarkIcon aria-hidden="true" className="hidden size-6 group-data-open:block" />
            </DisclosureButton>
          </div>
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start space-x-20">
            <div className="flex shrink-0 items-center">
              <img alt="Your Company" src={`${import.meta.env.BASE_URL}img5.png`} className="h-13 w-full"/>
              <h1 className = 'text-white text-3xl font-medium m-4 leading-loose'>chaitanya.dev</h1>
            </div>
          </div>
        </div>
      </div>
    </Disclosure>
  )
}