"use client";
import { useLocale } from "@/context/LocaleContext";
import { siteCopy as frSiteCopy } from "@/content/fr/siteCopy";
import { siteCopy as enSiteCopy } from "@/content/en/siteCopy";
import { servicesCopy as frServicesCopy } from "@/content/fr/servicesCopy";
import { servicesCopy as enServicesCopy } from "@/content/en/servicesCopy";
import { caseStudiesCopy as frCaseStudiesCopy } from "@/content/fr/caseStudiesCopy";
import { caseStudiesCopy as enCaseStudiesCopy } from "@/content/en/caseStudiesCopy";
import { blogCopy as frBlogCopy } from "@/content/fr/blogCopy";
import { blogCopy as enBlogCopy } from "@/content/en/blogCopy";
import { faqCopy as frFaqCopy } from "@/content/fr/faqCopynew";
import { faqCopy as enFaqCopy } from "@/content/en/faqCopynew";
import { oaaCopy as frOaaCopy } from "@/content/fr/oaaCopy";
import { oaaCopy as enOaaCopy } from "@/content/en/oaaCopy";

const content = {
  fr: {
    site: frSiteCopy,
    services: frServicesCopy,
    caseStudies: frCaseStudiesCopy,
    blog: frBlogCopy,
    faq: frFaqCopy,
    oaa: frOaaCopy,
  },
  en: {
    site: enSiteCopy,
    services: enServicesCopy,
    caseStudies: enCaseStudiesCopy,
    blog: enBlogCopy,
    faq: enFaqCopy,
    oaa: enOaaCopy,
  },
};

export const useContent = () => {
  const { locale } = useLocale();
  return content[locale];
};