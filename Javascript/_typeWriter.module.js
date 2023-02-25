const typeWriterElement = document.querySelector(".typeWriter");
const mainTypeWriter = document.querySelector(".typewriter-main");
const typeWriterList = document.querySelectorAll(".typewriter-list span");
const writeLetterDelay = 100;
const removeLetterDelay = 70;

const waitBetweenWriteWords = 500;
const waitBetweenRemoveWords = 1500;

let isObservingTypeWriter = false;
let isWriting = false;

let typeWriterObserver = new IntersectionObserver(
  async (entries, observer) => {
    isObservingTypeWriter = entries[0].isIntersecting;
    await typeWriter();
  },
  { threshold: [1] }
);
typeWriterObserver.observe(typeWriterElement);

async function typeWriter() {
  if (isObservingTypeWriter && !isWriting) {
    isWriting = true;
    for (let index = 0; index < typeWriterList.length; index++) {
      await writeWord(typeWriterList[index].textContent);
      await delayBetweenWords(waitBetweenRemoveWords);
      await removeWord(typeWriterList[index].textContent);
      await delayBetweenWords(waitBetweenWriteWords);
    }
    isWriting = false;
    await typeWriter();
  }
}

async function delayBetweenWords(delay = 0) {
  await new Promise(resolve =>
    setTimeout(() => {
      resolve();
    }, delay)
  );
}

async function writeWord(word) {
  const letters = word.split("");
  for (let index = 0; index < letters.length; index++) {
    mainTypeWriter.textContent += await writeLetter(letters[index]);
  }

  await delayBetweenWords();
}
async function writeLetter(letter) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(letter);
    }, writeLetterDelay);
  });
}

async function removeWord(word) {
  const letters = word.split("");
  for (let index = 0; index < letters.length; index++) {
    mainTypeWriter.textContent = await removeLastLetter(word);
  }
  await delayBetweenWords();
}

async function removeLastLetter(word) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(word.substring(0, mainTypeWriter.textContent.length - 1));
    }, removeLetterDelay);
  });
}
