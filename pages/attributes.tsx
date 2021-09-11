import * as React from 'react'
import { NextSeo } from 'next-seo'

import FadeInWhenVisible from '@components/FadeInWhenVisible'
import ContentLayout from '@components/ContentLayout'
import AttributesSection from '@components/AttributesSection'

import attributes from '@content/attributes.json'

type IAttrs = {
  title: string
  data: {
    image_path: string
    title: string
    rarity: string
  }[]
}

const all_attributes: IAttrs[] = [
  {
    title: 'Backgrounds',
    data: attributes.backgrounds
  },
  {
    title: 'Fur',
    data: attributes.fur
  },
  {
    title: 'Fur Patterns',
    data: attributes.fur_patterns
  },
  {
    title: 'Clothing',
    data: attributes.clothing
  },
  {
    title: 'Eyes',
    data: attributes.eyes
  },
  {
    title: 'Eye Objects',
    data: attributes.eye_objects
  },
  {
    title: 'Head',
    data: attributes.head
  },
  {
    title: 'Mouth',
    data: attributes.mouth
  },
  {
    title: 'Neck',
    data: attributes.neck
  }
]

const AttributesPage = (): JSX.Element => {
  return (
    <>
      <NextSeo title='Attributes' />
      <ContentLayout title='Attributes' noPadding={true}>
        <div className='container flex flex-col items-center justify-center w-screen px-8 space-y-24'>
          {all_attributes.map((attr, i) => (
            <FadeInWhenVisible key={i}>
              <AttributesSection section_title={attr.title} data={attr.data} />
            </FadeInWhenVisible>
          ))}
        </div>
      </ContentLayout>
    </>
  )
}

export default AttributesPage
