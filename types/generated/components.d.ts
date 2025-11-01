import type { Schema, Struct } from '@strapi/strapi';

export interface BlocksArticlesListSection extends Struct.ComponentSchema {
  collectionName: 'components_blocks_articles_list_sections';
  info: {
    displayName: 'articlesListSection';
  };
  attributes: {
    category: Schema.Attribute.Relation<'oneToOne', 'api::category.category'>;
    language: Schema.Attribute.Enumeration<['en', 'bn', 'both']>;
    limit: Schema.Attribute.Integer & Schema.Attribute.DefaultTo<12>;
    settings: Schema.Attribute.Component<'shared.section-settings', true>;
    showPagination: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<true>;
    sort: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'publishedAt:desc'>;
  };
}

export interface BlocksCategoryTabsSection extends Struct.ComponentSchema {
  collectionName: 'components_blocks_category_tabs_sections';
  info: {
    displayName: 'categoryTabsSection';
  };
  attributes: {
    categories: Schema.Attribute.Relation<
      'oneToMany',
      'api::category.category'
    >;
    defaultCategory: Schema.Attribute.Relation<
      'oneToOne',
      'api::category.category'
    >;
    Settings: Schema.Attribute.Component<'shared.section-settings', true>;
  };
}

export interface BlocksEditorsChoiceSection extends Struct.ComponentSchema {
  collectionName: 'components_blocks_editors_choice_sections';
  info: {
    displayName: 'editorsChoiceSection';
  };
  attributes: {
    Settings: Schema.Attribute.Component<'shared.section-settings', true>;
  };
}

export interface BlocksFeaturedArticlesSection extends Struct.ComponentSchema {
  collectionName: 'components_blocks_featured_articles_sections';
  info: {
    displayName: 'featuredArticlesSection';
  };
  attributes: {
    excludeArticleIds: Schema.Attribute.JSON;
    filterCategory: Schema.Attribute.Relation<
      'oneToOne',
      'api::category.category'
    >;
    filterLanguage: Schema.Attribute.Enumeration<['en', 'bn', 'both']> &
      Schema.Attribute.DefaultTo<'both'>;
    limit: Schema.Attribute.Integer &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<4>;
    settings: Schema.Attribute.Component<'shared.section-settings', false>;
    sort: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'publishedAt:desc'>;
  };
}

export interface BlocksHeroSection extends Struct.ComponentSchema {
  collectionName: 'components_blocks_hero_sections';
  info: {
    displayName: 'heroSection';
  };
  attributes: {
    grayscale: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    overlay: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<true>;
    Settings: Schema.Attribute.Component<'shared.section-settings', false>;
    showExcerpt: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
  };
}

export interface BlocksMediaSection extends Struct.ComponentSchema {
  collectionName: 'components_blocks_media_sections';
  info: {
    displayName: 'mediaSection';
  };
  attributes: {
    captions: Schema.Attribute.JSON;
    images: Schema.Attribute.Media<'images', true>;
    settings: Schema.Attribute.Component<'shared.section-settings', false>;
  };
}

export interface BlocksRichTextSection extends Struct.ComponentSchema {
  collectionName: 'components_blocks_rich_text_sections';
  info: {
    displayName: 'richTextSection';
  };
  attributes: {
    content: Schema.Attribute.Blocks & Schema.Attribute.Required;
    Settings: Schema.Attribute.Component<'shared.section-settings', false>;
  };
}

export interface SharedSectionSettings extends Struct.ComponentSchema {
  collectionName: 'components_shared_section_settings';
  info: {
    displayName: 'sectionSettings';
  };
  attributes: {
    anchorId: Schema.Attribute.String;
    backgroundColor: Schema.Attribute.String;
    enabled: Schema.Attribute.Boolean &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<true>;
    spacingBottom: Schema.Attribute.Enumeration<
      ['none', 'sm', 'md', 'lg', 'xl']
    > &
      Schema.Attribute.DefaultTo<'md'>;
    spacingTop: Schema.Attribute.Enumeration<['none', 'sm', 'md', 'lg', 'xl']> &
      Schema.Attribute.DefaultTo<'md'>;
    visibility: Schema.Attribute.Enumeration<['all', 'desktop', 'mobile']> &
      Schema.Attribute.DefaultTo<'all'>;
  };
}

export interface SharedSeo extends Struct.ComponentSchema {
  collectionName: 'components_shared_seos';
  info: {
    description: '';
    displayName: 'seo';
    icon: 'search';
  };
  attributes: {
    Keywords: Schema.Attribute.String;
    MetaDescription: Schema.Attribute.String;
    MetaImage: Schema.Attribute.Media<'images'>;
    MetaTitle: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'blocks.articles-list-section': BlocksArticlesListSection;
      'blocks.category-tabs-section': BlocksCategoryTabsSection;
      'blocks.editors-choice-section': BlocksEditorsChoiceSection;
      'blocks.featured-articles-section': BlocksFeaturedArticlesSection;
      'blocks.hero-section': BlocksHeroSection;
      'blocks.media-section': BlocksMediaSection;
      'blocks.rich-text-section': BlocksRichTextSection;
      'shared.section-settings': SharedSectionSettings;
      'shared.seo': SharedSeo;
    }
  }
}
