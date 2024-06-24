import { ArticleList } from 'features/ArticleList/ui/ArticleList';
import React, { ChangeEvent, useEffect, useState } from 'react';
import { mockPosts } from 'shared/mocks/mockArticles';
import s from './faq.module.css';
import { Accordeon } from 'shared/components/Accordeon';
import { faqList } from 'shared/mocks/faqList';

export const Faq = () => {
  
  return (
    <Accordeon faqList={faqList} />
  );
};
