import { SettingsTabs } from "@/components/SettingsTabs";

import * as Input from "@/components/Input";
import * as FileInput from "@/components/Form/FileInput";

import { Bold, Italic, Link, List, ListOrdered, Mail, Underline } from "lucide-react";
import { Select } from "@/components/Form/Select";
import { SelectItem } from "@/components/Form/Select/SelectItem";
import { TextArea } from "@/components/Form/TextArea";

1
export default function Home() {
  return (
    <>
      <h1 className=" text-3xl font-medium text-zinc-900">Settings</h1>
      
      <SettingsTabs />

      <div className="mt-6 flex flex-col ">

        <div className="flex items-center justify-between border-b pb-5 border-zinc-200">

          <div className="space-y-1">

            <h2 className="text-lg font-medium text-zinc-900">Personal info</h2>

            <span className="text-sm text-zinc-500">
              Update your photo and personal details here.
            </span>
          </div>

          <div className="flex items-center gap-2">

            <button 
              type="button" 
              className="rounded-lg px-4 py-2 text-sm font-semibold shadow-sm border border-zinc-300 text-zinc-700 hover:bg-zinc-50"
              >
                Cancel
              </button>

            <button 
              type="submit" 
              form="settings" 
              className="rounded-lg px-4 py-2 text-sm font-semibold shadow-sm bg-violet-600 text-white hover:bg-violet-700"
            >
              Save
            </button>

          </div>
        </div>

        <form id="settings" className="mt-6 flex flex-col w-full gap-5 divide-y divide-zinc-200 ">
          <div className="grid grid-cols-form gap-3">
            <label
              htmlFor="firstName"
              className="text-sm font-medium text-zinc-700"
            >
              Name
            </label>

            <div className="grid grid-cols-2 gap-6">
              
              <Input.Root>
                <Input.Control 
                  id="firstName" 
                  type="text" 
                  placeholder="First name"
                />
              </Input.Root>

              <Input.Root>
                <Input.Control 
                  id="lastName" 
                  type="text" 
                  placeholder="Last name"
                />
              </Input.Root>
            </div>
          </div>

          <div className="grid grid-cols-form gap-3 pt-5">
            <label
              htmlFor="email"
              className="text-sm font-medium text-zinc-700"
            >
              E-mail Address
            </label>
            <Input.Root>
              <Input.Prefix>
                <Mail className="h-5 w-5 text-zinc-500"/>
              </Input.Prefix>
              <Input.Control 
                id="email" 
                type="email" 
                placeholder="enter your email address"
              />
            </Input.Root>
          </div>

          <div className="grid grid-cols-form gap-3 pt-5">
            <label
              htmlFor="photo"
              className="text-sm font-medium text-zinc-700 space-y-0.5"
            >
              Your Photo
              <span className="mt-0.5 text-sm font-normal text-zinc-500 block">
                This will be displayed on your profile.
              </span>
            </label>
            <FileInput.Root className="flex items-start gap-5">
              <FileInput.ImagePreview />
              <FileInput.Trigger />
              <FileInput.Control />
            </FileInput.Root>
          </div>

          <div className="grid grid-cols-form gap-3 pt-5">
            <label
                htmlFor="role"
                className="text-sm font-medium text-zinc-700"
            >
              Role
            </label>
            <Input.Root>
              <Input.Control 
                id="role" 
                type="text" 
                placeholder="Product Designer"
              />
            </Input.Root>
          </div>
          
          <div className="grid grid-cols-form gap-3 pt-5">
            <label
                htmlFor="country"
                className="text-sm font-medium text-zinc-700"
            >
              Country
            </label>
            <Select placeholder="Select a country...">
              <SelectItem value="br" text="Brazil"></SelectItem>
              <SelectItem value="us" text="United States"></SelectItem>
            </Select>

          </div>

          <div className="grid grid-cols-form gap-3 pt-5">
            <label
                htmlFor="timezone"
                className="text-sm font-medium text-zinc-700"
            >
              Timezone
            </label>
            <Select placeholder="Select a timezone...">
              <SelectItem
                value="utc8"
                text="Pacific Standard Time (UTC-08:00)"
              />
              <SelectItem value="utc3" text="America São Paulo (UTC-03:00)" />
            </Select>
          </div>

          <div className="grid grid-cols-form gap-3 pt-5">
            <label
              htmlFor="bio"
              className="text-sm font-medium text-zinc-700 space-y-0.5"
            >
              BIO
              <span className="mt-0.5 text-sm font-normal text-zinc-500 block">
                Write a short introduction.
              </span>
            </label>

            <div className="space-y-3">
              <div className="grid grid-cols-2 gap-3">
                <Select placeholder="" defaultValue="normal">
                  <SelectItem 
                    value="normal"
                    defaultChecked
                    text="Normal Text" 
                  />

                  <SelectItem value="md" text="Markdown"/>
                </Select>

                <div className="flex items-start gap-1">
                  <button className="rounded-md p-2 hover:bg-zinc-50">
                    <Bold className="h-4 w-4 text-zinc-500" strokeWidth={3}/>
                  </button>
                  <button className="rounded-md p-2 hover:bg-zinc-50">
                    <Italic className="h-4 w-4 text-zinc-500" strokeWidth={3}/>
                  </button>
                  <button className="rounded-md p-2 hover:bg-zinc-50">
                    <Underline className="h-4 w-4 text-zinc-500" strokeWidth={3}/>
                  </button>
                  <button className="rounded-md p-2 hover:bg-zinc-50">
                    <Link className="h-4 w-4 text-zinc-500" strokeWidth={3}/>
                  </button>
                  <button className="rounded-md p-2 hover:bg-zinc-50">
                    <List className="h-4 w-4 text-zinc-500" strokeWidth={3}/>
                  </button>
                  <button className="rounded-md p-2 hover:bg-zinc-50">
                    <ListOrdered className="h-4 w-4 text-zinc-500" strokeWidth={3}/>
                  </button>
                </div>

              </div>

              <TextArea id="bioField" placeholder="Write about yourself..."/>
            </div>
          </div>

          <div className="grid grid-cols-form gap-3 pt-5">
            <label
              htmlFor="portifolio"
              className="text-sm font-medium text-zinc-700 space-y-0.5"
            >
              Portfolio projects
              <span className="mt-0.5 text-sm font-normal text-zinc-500 block">
              Share a few snippets of your work.
              </span>
            </label>
            <FileInput.Root>
              <FileInput.Trigger />
              <FileInput.FileList/>
              <FileInput.Control multiple/>
            </FileInput.Root>
          </div>

          <div className="flex items-center justify-end gap-2 pt-5">

            <button 
              type="button" 
              className="rounded-lg px-4 py-2 text-sm font-semibold shadow-sm border border-zinc-300 text-zinc-700 hover:bg-zinc-50"
              >
                Cancel
              </button>

            <button 
              type="submit" 
              className="rounded-lg px-4 py-2 text-sm font-semibold shadow-sm bg-violet-600 text-white hover:bg-violet-700"
              >
                Save
              </button>

          </div>
        </form>
      </div>
    </>
  );
}
