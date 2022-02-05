/* This example requires Tailwind CSS v2.0+ */
import { Fragment, useState } from 'react';
import { Listbox, Transition } from '@headlessui/react';
// import { CheckIcon, SelectorIcon } from '@heroicons/react/solid';
import { FiCheck as CheckIcon, FiChevronDown as SelectorIcon } from 'react-icons/fi';
import faker from '@faker-js/faker';

const causes = [
  {
    id: 1,
    name: '要件の確認不足',
  },
  {
    id: 2,
    name: '要件の理解不足',
  },
  {
    id: 3,
    name: '関連機能の確認不足',
  },
  {
    id: 4,
    name: '関連機能の理解不足',
  },
  {
    id: 5,
    name: '基本設計書の確認不足',
  },
  {
    id: 6,
    name: '基本設計書の理解不足',
  },
  {
    id: 7,
    name: '基本設計書の検討不足',
  },
  {
    id: 8,
    name: '設計基準習熟不足',
  },
];

type Cause = {
  id: number;
  name: string;
};

function classNames(...classes: any[]) {
  return classes.filter(Boolean).join(' ');
}

export default function SelectBox() {
  const [selected, setSelected] = useState<Cause>(faker.random.arrayElement(causes));

  return (
    <Listbox value={selected} onChange={setSelected}>
      {({ open }) => (
        <div className="relative">
          <Listbox.Button className="text-left focus:outline-none flex flex-row items-stretch text-sm ">
            <span className="font-medium">{selected?.name ?? ''}</span>
            <span className="pl-1">
              <SelectorIcon className="h-2 w-2 text-gray-400" aria-hidden="true" />
            </span>
          </Listbox.Button>

          <Transition
            show={open}
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Listbox.Options className="absolute z-10 mt-1 w-full bg-white shadow-lg max-h-56 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm">
              {causes.map((cause) => (
                <Listbox.Option
                  key={cause.id}
                  className={({ active }) =>
                    classNames(
                      active ? 'text-white bg-gray-600' : 'text-gray-900',
                      'cursor-default select-none relative py-1 pl-3 pr-9'
                    )
                  }
                  value={cause}
                >
                  {({ selected, active }) => (
                    <>
                      <div className="flex flex-row">
                        <span className="h-2 w-2" aria-hidden="true">
                          {selected ? <CheckIcon className="h-2 w-2" /> : null}
                        </span>
                        <span className={classNames(selected ? 'font-semibold' : 'font-normal', 'ml-3 block truncate')}>
                          {cause.name}
                        </span>
                      </div>
                    </>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      )}
    </Listbox>
  );
}
