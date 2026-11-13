import { useState } from 'react';
import styles from '../css/TagInput.module.css'

export function TagInput() {
  const [tags, setTags] = useState<string[]>([]);
  const [inputValue, setInputValue] = useState('');

  const handleKeyDown = (e: any) => {
    if (e.key === 'Enter' || e.key === ',') {
      e.preventDefault();
      const novaTag = inputValue.trim();

      if (novaTag && !tags.includes(novaTag)) {
        setTags([...tags, novaTag]);
      }
      setInputValue('');
    }

    if (e.key === 'Backspace' && !inputValue && tags.length > 0) {
      setTags(tags.slice(0, -1));
    }
  };

  const removeTag = (indexToRemove: number) => {
    setTags(tags.filter((_, index) => index !== indexToRemove));
  };

  return (
    <div className={styles.tagInputContainer}>
      {tags.map((tag, index) => (
        <span key={index} className={styles.tagItem}>
          {tag}
          <button
            type="button"
            className={styles.tagRemoveBtn}
            onClick={() => removeTag(index)}
            aria-label={`Remover ${tag}`}
          >
            &times;
          </button>
        </span>
      ))}

      <input
        type="text"
        className={styles.tagInputField}
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder="Digite e pressione Enter..."
      />
    </div>
  );
}