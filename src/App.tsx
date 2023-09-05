import { FC } from 'react';
import Template7 from 'template7';

import './style.css';

const template = `{{#if context.username}}{{context.username}}{{else}}고객{{/if}}님 안녕하세요!`;

export const App: FC<{ name: string }> = ({ name }) => {
  const compiledTemplate = Template7.compile(template);

  const result = compiledTemplate({
    context: {
      username: '김태훈',
    },
  });

  const result2 = compiledTemplate({
    context: {}, // context 키가 없을 시 username 접근 때 에러 발생
  });

  return (
    <div>
      <h1>{result}</h1>
      <h1>{result2}</h1>
    </div>
  );
};
