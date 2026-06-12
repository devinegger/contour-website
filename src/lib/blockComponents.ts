import Hero from '../components/blocks/Hero.astro';
import ServicesPreview from '../components/blocks/ServicesPreview.astro';
import Differentiators from '../components/blocks/Differentiators.astro';
import TrustSignal from '../components/blocks/TrustSignal.astro';
import CtaStrip from '../components/blocks/CtaStrip.astro';
import ServicesFull from '../components/blocks/ServicesFull.astro';
import CostComparison from '../components/blocks/CostComparison.astro';
import SecondaryServices from '../components/blocks/SecondaryServices.astro';
import Faq from '../components/blocks/Faq.astro';
import RichText from '../components/blocks/RichText.astro';
import AboutStory from '../components/blocks/AboutStory.astro';
import ContactForm from '../components/blocks/ContactForm.astro';
import Callout from '../components/blocks/Callout.astro';
import Content from '../components/blocks/Content.astro';
import Features from '../components/blocks/Features.astro';
import Split from '../components/blocks/Split.astro';
import Video from '../components/blocks/Video.astro';
import ImageBlock from '../components/blocks/ImageBlock.astro';

// Keys are the __typename values returned by the Tina GraphQL API.
// Pattern: Pages + Blocks + {PascalCase template name}
export const blockComponents: Record<string, unknown> = {
  'PagesBlocksHero': Hero,
  'PagesBlocksServices_preview': ServicesPreview,
  'PagesBlocksDifferentiators': Differentiators,
  'PagesBlocksTrust_signal': TrustSignal,
  'PagesBlocksCta_strip': CtaStrip,
  'PagesBlocksServices_full': ServicesFull,
  'PagesBlocksCost_comparison': CostComparison,
  'PagesBlocksSecondary_services': SecondaryServices,
  'PagesBlocksFaq': Faq,
  'PagesBlocksRich_text': RichText,
  'PagesBlocksAbout_story': AboutStory,
  'PagesBlocksContact_form': ContactForm,
  'PagesBlocksCallout': Callout,
  'PagesBlocksContent': Content,
  'PagesBlocksFeatures': Features,
  'PagesBlocksSplit': Split,
  'PagesBlocksVideo': Video,
  'PagesBlocksImage': ImageBlock,
};
