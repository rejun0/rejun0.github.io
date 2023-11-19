const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: 'https://rejun0.github.io/',
  title: '',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Junho Lee',
  role: 'Full Stack Engineer',
  description:
    '상상한 무궁무진한 아이디어를 제가 배운 기술로 구현해가는 과정이 재밌습니다.\n항상 새로운 시도를 두려워하지 않는 풀스택 개발자가 되겠습니다.\n거칠고 빠르게 지나가는 물보다 잔잔하게 오랫동안 깊이 있게 흐르는 물처럼 꾸준히 공부하고, 계속 해서 나아갈 자신이 있습니다. 성실하게 쌓은 지식으로, 회사에 실질적인 도움이 되는 풀스택 개발자로 일하고 싶습니다.',
  resume: 'https://example.com',
  social: {
    linkedin: 'https://notion.com',
    github: 'https://github.com/rejun0',
  },
}

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'Dot',
    description:
      'https://raw.githubusercontent.com/rejun0/rejun0.github.io/main/src/resources/images/Dot_Preview.png',
    stack: ['Java', 'Spring', 'HTML5', 'CSS', 'JS', 'MyBatis'],
    sourceCode: 'https://github.com',
    livePreview: 'https://notion.com',
  },
  {
    name: 'Fundable',
    description:
      'Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam',
    stack: ['Java', 'JSP&Servlet', 'HTML5', 'CSS', 'JS', 'MyBatis'],
    sourceCode: 'https://github.com',
    livePreview: 'https://notion.com',
  },
]

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  'HTML',
  'CSS',
  'JavaScript',
  'JSP',
  'React',
  'Redux',
  'Java',
  'Spring',
  'Oracle',
  'MySQL',
  'MyBatis',
  'Git',
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'rejun0@naver.com',
}

export { header, about, projects, skills, contact }
