export function gql(strings, ...args) {
  let str = "";
  strings.forEach((string, i) => {
    str += string + (args[i] || "");
  });
  return str;
}
export const PagesPartsFragmentDoc = gql`
    fragment PagesParts on Pages {
  __typename
  title
  h1
  slug
  seo {
    __typename
    metaTitle
    metaDescription
    ogImage
  }
  blocks {
    __typename
    ... on PagesBlocksCallout {
      text
      linkLabel
      linkUrl
      background
    }
    ... on PagesBlocksContent {
      heading
      body
      background
    }
    ... on PagesBlocksFeatures {
      headline
      richIntro
      items {
        __typename
        title
        url
        image
        richBody
      }
      background
    }
    ... on PagesBlocksSplit {
      headline
      body
      image
      imageAlt
      imagePosition
      ctaLabel
      ctaUrl
      background
    }
    ... on PagesBlocksVideo {
      headline
      url
      caption
      background
    }
    ... on PagesBlocksImage {
      image
      alt
      caption
      width
      size
      background
    }
    ... on PagesBlocksHero {
      headline
      subheading
      primaryCtaLabel
      primaryCtaUrl
      secondaryCtaLabel
      secondaryCtaUrl
      trustAnchor
    }
    ... on PagesBlocksServices_preview {
      eyebrow
      heading
      intro
      footnote
    }
    ... on PagesBlocksDifferentiators {
      items {
        __typename
        headline
        body
      }
    }
    ... on PagesBlocksTrust_signal {
      statement
      badgeSlot
    }
    ... on PagesBlocksCta_strip {
      headline
      ctaLabel
      ctaUrl
      background
    }
    ... on PagesBlocksServices_full {
      _placeholder
    }
    ... on PagesBlocksCost_comparison {
      headline
      intro
      rows {
        __typename
        label
        competitorCost
        contourCost
      }
    }
    ... on PagesBlocksSecondary_services {
      card1 {
        __typename
        headline
        description
        price
        ctaLabel
        ctaUrl
      }
      card2 {
        __typename
        headline
        description
        price
        ctaLabel
        ctaUrl
      }
    }
    ... on PagesBlocksFaq {
      _placeholder
    }
    ... on PagesBlocksRich_text {
      body
    }
    ... on PagesBlocksAbout_story {
      opening
      storyBody
      howWeWork
      locationLine
      ctaLabel
      ctaUrl
    }
    ... on PagesBlocksContact_form {
      pageHeader
      responseTimeLine
      bookingLinkLabel
      bookingLinkUrl
      locationLine
    }
  }
}
    `;
export const PostsPartsFragmentDoc = gql`
    fragment PostsParts on Posts {
  __typename
  title
  slug
  date
  excerpt
  body
}
    `;
export const ServicesPartsFragmentDoc = gql`
    fragment ServicesParts on Services {
  __typename
  name
  slug
  tier
  tagline
  previewSnippet
  description
  price
  setupFee
  inclusions
  ctaLabel
  ctaUrl
}
    `;
export const FaqsPartsFragmentDoc = gql`
    fragment FaqsParts on Faqs {
  __typename
  question
  answer
  order
}
    `;
export const SiteSettingsPartsFragmentDoc = gql`
    fragment SiteSettingsParts on SiteSettings {
  __typename
  businessName
  tagline
  locationLine
  navLinks {
    __typename
    label
    url
  }
  footerLinks {
    __typename
    label
    url
  }
  defaultSeoTitle
  defaultSeoDescription
  defaultOgImage
}
    `;
export const PagesDocument = gql`
    query pages($relativePath: String!) {
  pages(relativePath: $relativePath) {
    ... on Document {
      _sys {
        filename
        basename
        hasReferences
        breadcrumbs
        path
        relativePath
        extension
      }
      id
    }
    ...PagesParts
  }
}
    ${PagesPartsFragmentDoc}`;
export const PagesConnectionDocument = gql`
    query pagesConnection($before: String, $after: String, $first: Float, $last: Float, $sort: String, $filter: PagesFilter) {
  pagesConnection(
    before: $before
    after: $after
    first: $first
    last: $last
    sort: $sort
    filter: $filter
  ) {
    pageInfo {
      hasPreviousPage
      hasNextPage
      startCursor
      endCursor
    }
    totalCount
    edges {
      cursor
      node {
        ... on Document {
          _sys {
            filename
            basename
            hasReferences
            breadcrumbs
            path
            relativePath
            extension
          }
          id
        }
        ...PagesParts
      }
    }
  }
}
    ${PagesPartsFragmentDoc}`;
export const PostsDocument = gql`
    query posts($relativePath: String!) {
  posts(relativePath: $relativePath) {
    ... on Document {
      _sys {
        filename
        basename
        hasReferences
        breadcrumbs
        path
        relativePath
        extension
      }
      id
    }
    ...PostsParts
  }
}
    ${PostsPartsFragmentDoc}`;
export const PostsConnectionDocument = gql`
    query postsConnection($before: String, $after: String, $first: Float, $last: Float, $sort: String, $filter: PostsFilter) {
  postsConnection(
    before: $before
    after: $after
    first: $first
    last: $last
    sort: $sort
    filter: $filter
  ) {
    pageInfo {
      hasPreviousPage
      hasNextPage
      startCursor
      endCursor
    }
    totalCount
    edges {
      cursor
      node {
        ... on Document {
          _sys {
            filename
            basename
            hasReferences
            breadcrumbs
            path
            relativePath
            extension
          }
          id
        }
        ...PostsParts
      }
    }
  }
}
    ${PostsPartsFragmentDoc}`;
export const ServicesDocument = gql`
    query services($relativePath: String!) {
  services(relativePath: $relativePath) {
    ... on Document {
      _sys {
        filename
        basename
        hasReferences
        breadcrumbs
        path
        relativePath
        extension
      }
      id
    }
    ...ServicesParts
  }
}
    ${ServicesPartsFragmentDoc}`;
export const ServicesConnectionDocument = gql`
    query servicesConnection($before: String, $after: String, $first: Float, $last: Float, $sort: String, $filter: ServicesFilter) {
  servicesConnection(
    before: $before
    after: $after
    first: $first
    last: $last
    sort: $sort
    filter: $filter
  ) {
    pageInfo {
      hasPreviousPage
      hasNextPage
      startCursor
      endCursor
    }
    totalCount
    edges {
      cursor
      node {
        ... on Document {
          _sys {
            filename
            basename
            hasReferences
            breadcrumbs
            path
            relativePath
            extension
          }
          id
        }
        ...ServicesParts
      }
    }
  }
}
    ${ServicesPartsFragmentDoc}`;
export const FaqsDocument = gql`
    query faqs($relativePath: String!) {
  faqs(relativePath: $relativePath) {
    ... on Document {
      _sys {
        filename
        basename
        hasReferences
        breadcrumbs
        path
        relativePath
        extension
      }
      id
    }
    ...FaqsParts
  }
}
    ${FaqsPartsFragmentDoc}`;
export const FaqsConnectionDocument = gql`
    query faqsConnection($before: String, $after: String, $first: Float, $last: Float, $sort: String, $filter: FaqsFilter) {
  faqsConnection(
    before: $before
    after: $after
    first: $first
    last: $last
    sort: $sort
    filter: $filter
  ) {
    pageInfo {
      hasPreviousPage
      hasNextPage
      startCursor
      endCursor
    }
    totalCount
    edges {
      cursor
      node {
        ... on Document {
          _sys {
            filename
            basename
            hasReferences
            breadcrumbs
            path
            relativePath
            extension
          }
          id
        }
        ...FaqsParts
      }
    }
  }
}
    ${FaqsPartsFragmentDoc}`;
export const SiteSettingsDocument = gql`
    query siteSettings($relativePath: String!) {
  siteSettings(relativePath: $relativePath) {
    ... on Document {
      _sys {
        filename
        basename
        hasReferences
        breadcrumbs
        path
        relativePath
        extension
      }
      id
    }
    ...SiteSettingsParts
  }
}
    ${SiteSettingsPartsFragmentDoc}`;
export const SiteSettingsConnectionDocument = gql`
    query siteSettingsConnection($before: String, $after: String, $first: Float, $last: Float, $sort: String, $filter: SiteSettingsFilter) {
  siteSettingsConnection(
    before: $before
    after: $after
    first: $first
    last: $last
    sort: $sort
    filter: $filter
  ) {
    pageInfo {
      hasPreviousPage
      hasNextPage
      startCursor
      endCursor
    }
    totalCount
    edges {
      cursor
      node {
        ... on Document {
          _sys {
            filename
            basename
            hasReferences
            breadcrumbs
            path
            relativePath
            extension
          }
          id
        }
        ...SiteSettingsParts
      }
    }
  }
}
    ${SiteSettingsPartsFragmentDoc}`;
export function getSdk(requester) {
  return {
    pages(variables, options) {
      return requester(PagesDocument, variables, options);
    },
    pagesConnection(variables, options) {
      return requester(PagesConnectionDocument, variables, options);
    },
    posts(variables, options) {
      return requester(PostsDocument, variables, options);
    },
    postsConnection(variables, options) {
      return requester(PostsConnectionDocument, variables, options);
    },
    services(variables, options) {
      return requester(ServicesDocument, variables, options);
    },
    servicesConnection(variables, options) {
      return requester(ServicesConnectionDocument, variables, options);
    },
    faqs(variables, options) {
      return requester(FaqsDocument, variables, options);
    },
    faqsConnection(variables, options) {
      return requester(FaqsConnectionDocument, variables, options);
    },
    siteSettings(variables, options) {
      return requester(SiteSettingsDocument, variables, options);
    },
    siteSettingsConnection(variables, options) {
      return requester(SiteSettingsConnectionDocument, variables, options);
    }
  };
}
import { createClient } from "tinacms/dist/client";
const generateRequester = (client) => {
  const requester = async (doc, vars, options) => {
    let url = client.apiUrl;
    if (options?.branch) {
      const index = client.apiUrl.lastIndexOf("/");
      url = client.apiUrl.substring(0, index + 1) + options.branch;
    }
    const data = await client.request({
      query: doc,
      variables: vars,
      url
    }, options);
    return { data: data?.data, errors: data?.errors, query: doc, variables: vars || {} };
  };
  return requester;
};
export const ExperimentalGetTinaClient = () => getSdk(
  generateRequester(
    createClient({
      url: "http://localhost:4001/graphql",
      queries
    })
  )
);
export const queries = (client) => {
  const requester = generateRequester(client);
  return getSdk(requester);
};
