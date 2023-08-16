'use client';

import { useState } from 'react';
import { Emotion } from './DiaryCard';

export default function DropdownSelector({
  caption,
  options,
  selectHandler,
  selectedItems = [],
  required = false,
}: {
  caption: string;
  options: string[];
  selectHandler: Function;
  selectedItems?: string[];
  required?: boolean;
}) {
  return (
    <div>
      <p className="mb-4 flex flex-col">
        {caption}
        {required && <span className="text-red-500">* required</span>}
      </p>
      <div className="dropdown">
        <label tabIndex={0} className="btn m-1">
          Choose any..
        </label>
        <ul
          tabIndex={0}
          className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-fit text-black align-middle"
        >
          {options.map((item: string, index: number) => (
            <li key={index} className="">
              <label className="label cursor-pointer flex flex-row justify-start text-left">
                <input
                  type="checkbox"
                  className="checkbox mr-2"
                  name={item.toLowerCase()}
                  defaultChecked={selectedItems.includes(item)}
                  onChange={() => selectHandler(item)}
                />
                <span className="label-text">{item}</span>
              </label>
            </li>
          ))}
          {/* <li>
            <label className="label cursor-pointer flex flex-row justify-start text-left">
              <input type="checkbox" className="checkbox mr-2" name="other" />
              <input
                type="text"
                className="input input-bordered input-sm w-20"
                placeholder="Other"
                onChange={(e) => (true)}
              />
            </label>
          </li> */}
        </ul>
      </div>
    </div>
  );
}
