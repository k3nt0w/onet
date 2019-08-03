const { schedule } = require('danger')
const { istanbulCoverage } = require('danger-plugin-istanbul-coverage')

schedule(
  istanbulCoverage({
    customSuccessMessage: '🎉 カバレッジ問題ありません 🎉',
    customFailureMessage:
      'テストカバレッジが低いです...🤔 80%以上にしてくださいね。🙏',
    entrySortMethod: 'least-coverage',
    numberOfEntries: 5,
    coveragePath: {
      path: './coverage/lcov.info',
      type: 'lcov'
    },
    reportFileSet: 'createdOrModified',
    reportMode: 'fail',
    threshold: {
      statements: 80,
      branches: 80,
      functions: 80,
      lines: 80
    }
  })
)
