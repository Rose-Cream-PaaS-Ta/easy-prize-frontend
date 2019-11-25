import React, { Fragment } from 'react';

export default function newlineToBreak(text: string): React.ReactNode {
  return text.split('\n').map((item: string, key: number) => {
    return <Fragment key={key}>{item}<br/></Fragment>;
  });
}
