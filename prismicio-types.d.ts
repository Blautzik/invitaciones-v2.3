// Code generated by Slice Machine. DO NOT EDIT.

import type * as prismic from "@prismicio/client";

type Simplify<T> = {
  [KeyType in keyof T]: T[KeyType];
};
/** Content for Article documents */
interface ArticleDocumentData {
  /**
   * Title field in *Article*
   *
   * - **Field Type**: Title
   * - **Placeholder**: Title of the article
   * - **API ID Path**: article.title
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
   *
   */
  title: prismic.TitleField;
  /**
   * Featured Image field in *Article*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: article.featuredImage
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/core-concepts/image
   *
   */
  featuredImage: prismic.ImageField<never>;
  /**
   * Fecha Evento field in *Article*
   *
   * - **Field Type**: Timestamp
   * - **Placeholder**: *None*
   * - **API ID Path**: article.fechaEvento
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/core-concepts/timestamp
   *
   */
  fechaEvento: prismic.TimestampField;
  /**
   * frase field in *Article*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: article.frase
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
   *
   */
  frase: prismic.KeyTextField;
  /**
   * Slice Zone field in *Article*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: article.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/core-concepts/slices
   *
   */
  slices: prismic.SliceZone<ArticleDocumentDataSlicesSlice>;
}
/**
 * Slice for *Article → Slice Zone*
 *
 */
type ArticleDocumentDataSlicesSlice =
  | ImageSlice
  | QuoteSlice
  | TextSlice
  | ContactFormSlice;
/**
 * Article document from Prismic
 *
 * - **API ID**: `article`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/core-concepts/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type ArticleDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithUID<
    Simplify<ArticleDocumentData>,
    "article",
    Lang
  >;
/** Content for Navigation documents */
interface NavigationDocumentData {
  /**
   * Homepage Label field in *Navigation*
   *
   * - **Field Type**: Title
   * - **Placeholder**: Label for the homepage link
   * - **API ID Path**: navigation.homepageLabel
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
   *
   */
  homepageLabel: prismic.TitleField;
  /**
   * Links field in *Navigation*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: navigation.links[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/core-concepts/group
   *
   */
  links: prismic.GroupField<Simplify<NavigationDocumentDataLinksItem>>;
}
/**
 * Item in Navigation → Links
 *
 */
export interface NavigationDocumentDataLinksItem {
  /**
   * Label field in *Navigation → Links*
   *
   * - **Field Type**: Title
   * - **Placeholder**: Optional - Label for the link
   * - **API ID Path**: navigation.links[].label
   * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
   *
   */
  label: prismic.TitleField;
  /**
   * Link field in *Navigation → Links*
   *
   * - **Field Type**: Link
   * - **Placeholder**: Link for navigation item
   * - **API ID Path**: navigation.links[].link
   * - **Documentation**: https://prismic.io/docs/core-concepts/link-content-relationship
   *
   */
  link: prismic.LinkField;
}
/**
 * Navigation document from Prismic
 *
 * - **API ID**: `navigation`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/core-concepts/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type NavigationDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithoutUID<
    Simplify<NavigationDocumentData>,
    "navigation",
    Lang
  >;
/** Content for Page documents */
interface PageDocumentData {
  /**
   * Title field in *Page*
   *
   * - **Field Type**: Title
   * - **Placeholder**: Title for the page
   * - **API ID Path**: page.title
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
   *
   */
  title: prismic.TitleField;
  /**
   * Slice Zone field in *Page*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: page.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/core-concepts/slices
   *
   */
  slices: prismic.SliceZone<PageDocumentDataSlicesSlice>;
}
/**
 * Slice for *Page → Slice Zone*
 *
 */
type PageDocumentDataSlicesSlice =
  | ImageSlice
  | QuoteSlice
  | TextSlice
  | ContactFormSlice;
/**
 * Page document from Prismic
 *
 * - **API ID**: `page`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/core-concepts/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type PageDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithUID<Simplify<PageDocumentData>, "page", Lang>;
/** Content for quince documents */
interface QuinceDocumentData {
  /**
   * title field in *quince*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: quince.title
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
   *
   */
  title: prismic.KeyTextField;
  /**
   * foto field in *quince*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: quince.foto
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/core-concepts/image
   *
   */
  foto: prismic.ImageField<never>;
  /**
   * frase field in *quince*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: quince.frase
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
   *
   */
  frase: prismic.KeyTextField;
  /**
   * saludo field in *quince*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: quince.saludo
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
   *
   */
  saludo: prismic.KeyTextField;
  /**
   * Fecha field in *quince*
   *
   * - **Field Type**: Date
   * - **Placeholder**: *None*
   * - **API ID Path**: quince.fecha
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/core-concepts/date
   *
   */
  fecha: prismic.DateField;
  /**
   * galeria field in *quince*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: quince.galeria[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/core-concepts/group
   *
   */
  galeria: prismic.GroupField<Simplify<QuinceDocumentDataGaleriaItem>>;
  /**
   * salon field in *quince*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: quince.salon
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
   *
   */
  salon: prismic.KeyTextField;
  /**
   * ubicacion field in *quince*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: quince.ubicacion
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
   *
   */
  ubicacion: prismic.KeyTextField;
  /**
   * formulario field in *quince*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: quince.formulario
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
   *
   */
  formulario: prismic.KeyTextField;
  /**
   * alias regalos field in *quince*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: quince.alias
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
   *
   */
  alias: prismic.KeyTextField;
  /**
   * titulo galeria field in *quince*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: quince.titulo_galeria
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
   *
   */
  titulo_galeria: prismic.KeyTextField;
  /**
   * Slice Zone field in *quince*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: quince.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/core-concepts/slices
   *
   */
  slices: prismic.SliceZone<QuinceDocumentDataSlicesSlice>;
  /**
   * Meta Description field in *quince*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: A brief summary of the page
   * - **API ID Path**: quince.meta_description
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
   *
   */
  meta_description: prismic.RichTextField;
  /**
   * Meta Image field in *quince*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: quince.meta_image
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/core-concepts/image
   *
   */
  meta_image: prismic.ImageField<never>;
  /**
   * Meta Title field in *quince*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A title of the page used for social media and search engines
   * - **API ID Path**: quince.meta_title
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
   *
   */
  meta_title: prismic.KeyTextField;
}
/**
 * Item in quince → galeria
 *
 */
export interface QuinceDocumentDataGaleriaItem {
  /**
   * foto1 field in *quince → galeria*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: quince.galeria[].foto1
   * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
   *
   */
  foto1: prismic.KeyTextField;
  /**
   * foto2 field in *quince → galeria*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: quince.galeria[].foto2
   * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
   *
   */
  foto2: prismic.KeyTextField;
  /**
   * foto3 field in *quince → galeria*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: quince.galeria[].foto3
   * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
   *
   */
  foto3: prismic.KeyTextField;
  /**
   * foto4 field in *quince → galeria*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: quince.galeria[].foto4
   * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
   *
   */
  foto4: prismic.KeyTextField;
  /**
   * foto5 field in *quince → galeria*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: quince.galeria[].foto5
   * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
   *
   */
  foto5: prismic.KeyTextField;
  /**
   * foto6 field in *quince → galeria*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: quince.galeria[].foto6
   * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
   *
   */
  foto6: prismic.KeyTextField;
}
/**
 * Slice for *quince → Slice Zone*
 *
 */
type QuinceDocumentDataSlicesSlice = never;
/**
 * quince document from Prismic
 *
 * - **API ID**: `quince`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/core-concepts/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type QuinceDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithUID<Simplify<QuinceDocumentData>, "quince", Lang>;
/** Content for Settings documents */
interface SettingsDocumentData {
  /**
   * Name field in *Settings*
   *
   * - **Field Type**: Title
   * - **Placeholder**: Name of your blog (e.g. your name)
   * - **API ID Path**: settings.name
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
   *
   */
  name: prismic.TitleField;
  /**
   * Description field in *Settings*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: Short description of your blog
   * - **API ID Path**: settings.description
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
   *
   */
  description: prismic.RichTextField;
  /**
   * Profile Picture field in *Settings*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: settings.profilePicture
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/core-concepts/image
   *
   */
  profilePicture: prismic.ImageField<never>;
  /**
   * Newsletter Description field in *Settings*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: Text above the sign up form
   * - **API ID Path**: settings.newsletterDescription
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
   *
   */
  newsletterDescription: prismic.RichTextField;
  /**
   * Newsletter Disclaimer field in *Settings*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: Small text below sign up form
   * - **API ID Path**: settings.newsletterDisclaimer
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
   *
   */
  newsletterDisclaimer: prismic.RichTextField;
}
/**
 * Settings document from Prismic
 *
 * - **API ID**: `settings`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/core-concepts/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type SettingsDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithoutUID<
    Simplify<SettingsDocumentData>,
    "settings",
    Lang
  >;
export type AllDocumentTypes =
  | ArticleDocument
  | NavigationDocument
  | PageDocument
  | QuinceDocument
  | SettingsDocument;
/**
 * Default variation for ContactForm Slice
 *
 * - **API ID**: `default`
 * - **Description**: `ContactForm`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type ContactFormSliceDefault = prismic.SharedSliceVariation<
  "default",
  Record<string, never>,
  never
>;
/**
 * Slice variation for *ContactForm*
 *
 */
type ContactFormSliceVariation = ContactFormSliceDefault;
/**
 * ContactForm Shared Slice
 *
 * - **API ID**: `contact_form`
 * - **Description**: `ContactForm`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type ContactFormSlice = prismic.SharedSlice<
  "contact_form",
  ContactFormSliceVariation
>;
/**
 * Primary content in Fecha → Primary
 *
 */
interface FechaSliceDefaultPrimary {
  /**
   * Fecha field in *Fecha → Primary*
   *
   * - **Field Type**: Timestamp
   * - **Placeholder**: *None*
   * - **API ID Path**: fecha.primary.fecha
   * - **Documentation**: https://prismic.io/docs/core-concepts/timestamp
   *
   */
  fecha: prismic.TimestampField;
}
/**
 * Default variation for Fecha Slice
 *
 * - **API ID**: `default`
 * - **Description**: `Default`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type FechaSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<FechaSliceDefaultPrimary>,
  never
>;
/**
 * Slice variation for *Fecha*
 *
 */
type FechaSliceVariation = FechaSliceDefault;
/**
 * Fecha Shared Slice
 *
 * - **API ID**: `fecha`
 * - **Description**: `Fecha`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type FechaSlice = prismic.SharedSlice<"fecha", FechaSliceVariation>;
/**
 * Primary content in Image → Primary
 *
 */
interface ImageSliceDefaultPrimary {
  /**
   * Image field in *Image → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: image.primary.image
   * - **Documentation**: https://prismic.io/docs/core-concepts/image
   *
   */
  image: prismic.ImageField<never>;
  /**
   * Caption field in *Image → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: Optional - Caption under the image
   * - **API ID Path**: image.primary.caption
   * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
   *
   */
  caption: prismic.RichTextField;
}
/**
 * Default variation for Image Slice
 *
 * - **API ID**: `default`
 * - **Description**: `Image`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type ImageSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<ImageSliceDefaultPrimary>,
  never
>;
/**
 * Primary content in Image → Primary
 *
 */
interface ImageSliceWidePrimary {
  /**
   * Image field in *Image → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: image.primary.image
   * - **Documentation**: https://prismic.io/docs/core-concepts/image
   *
   */
  image: prismic.ImageField<never>;
  /**
   * Caption field in *Image → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: Optional - Caption under the image
   * - **API ID Path**: image.primary.caption
   * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
   *
   */
  caption: prismic.RichTextField;
}
/**
 * Wide variation for Image Slice
 *
 * - **API ID**: `wide`
 * - **Description**: `Image`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type ImageSliceWide = prismic.SharedSliceVariation<
  "wide",
  Simplify<ImageSliceWidePrimary>,
  never
>;
/**
 * Slice variation for *Image*
 *
 */
type ImageSliceVariation = ImageSliceDefault | ImageSliceWide;
/**
 * Image Shared Slice
 *
 * - **API ID**: `image`
 * - **Description**: `Image`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type ImageSlice = prismic.SharedSlice<"image", ImageSliceVariation>;
/**
 * Primary content in Quote → Primary
 *
 */
interface QuoteSliceDefaultPrimary {
  /**
   * Quote field in *Quote → Primary*
   *
   * - **Field Type**: Title
   * - **Placeholder**: Quote without quotation marks
   * - **API ID Path**: quote.primary.quote
   * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
   *
   */
  quote: prismic.TitleField;
  /**
   * Source field in *Quote → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: Source of the quote
   * - **API ID Path**: quote.primary.source
   * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
   *
   */
  source: prismic.KeyTextField;
}
/**
 * Default variation for Quote Slice
 *
 * - **API ID**: `default`
 * - **Description**: `Quote`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type QuoteSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<QuoteSliceDefaultPrimary>,
  never
>;
/**
 * Slice variation for *Quote*
 *
 */
type QuoteSliceVariation = QuoteSliceDefault;
/**
 * Quote Shared Slice
 *
 * - **API ID**: `quote`
 * - **Description**: `Quote`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type QuoteSlice = prismic.SharedSlice<"quote", QuoteSliceVariation>;
/**
 * Primary content in Text → Primary
 *
 */
interface TextSliceDefaultPrimary {
  /**
   * Text field in *Text → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: Text with rich formatting
   * - **API ID Path**: text.primary.text
   * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
   *
   */
  text: prismic.RichTextField;
}
/**
 * Default variation for Text Slice
 *
 * - **API ID**: `default`
 * - **Description**: `Text`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type TextSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<TextSliceDefaultPrimary>,
  never
>;
/**
 * Slice variation for *Text*
 *
 */
type TextSliceVariation = TextSliceDefault;
/**
 * Text Shared Slice
 *
 * - **API ID**: `text`
 * - **Description**: `Text`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type TextSlice = prismic.SharedSlice<"text", TextSliceVariation>;
declare module "@prismicio/client" {
  interface CreateClient {
    (
      repositoryNameOrEndpoint: string,
      options?: prismic.ClientConfig
    ): prismic.Client<AllDocumentTypes>;
  }
  namespace Content {
    export type {
      ArticleDocumentData,
      ArticleDocumentDataSlicesSlice,
      ArticleDocument,
      NavigationDocumentData,
      NavigationDocumentDataLinksItem,
      NavigationDocument,
      PageDocumentData,
      PageDocumentDataSlicesSlice,
      PageDocument,
      QuinceDocumentData,
      QuinceDocumentDataGaleriaItem,
      QuinceDocumentDataSlicesSlice,
      QuinceDocument,
      SettingsDocumentData,
      SettingsDocument,
      AllDocumentTypes,
      ContactFormSliceDefault,
      ContactFormSliceVariation,
      ContactFormSlice,
      FechaSliceDefaultPrimary,
      FechaSliceDefault,
      FechaSliceVariation,
      FechaSlice,
      ImageSliceDefaultPrimary,
      ImageSliceDefault,
      ImageSliceWidePrimary,
      ImageSliceWide,
      ImageSliceVariation,
      ImageSlice,
      QuoteSliceDefaultPrimary,
      QuoteSliceDefault,
      QuoteSliceVariation,
      QuoteSlice,
      TextSliceDefaultPrimary,
      TextSliceDefault,
      TextSliceVariation,
      TextSlice,
    };
  }
}
