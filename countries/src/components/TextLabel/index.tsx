import React, { useMemo } from 'react';
import './index.scss';

type TextLabelProps = {
  type: 'App-Title' | 'Section-Title' | 'Item-Title';
  text: string;
};

function TextLabel({ type, text }: TextLabelProps): JSX.Element {
  const classModifier = useMemo(() => {
    switch (type) {
      case 'App-Title':
        return 'app';
      case 'Section-Title':
        return 'section';

      default:
        return 'item';
    }
  }, [type]);
  return <div className={`text-label--${classModifier}`}>{text}</div>;
}

export default TextLabel;
