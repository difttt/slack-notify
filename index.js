const SlackNotify = require('slack-notify');
const commander = require('commander');


commander
  .version('1.0.0', '-v, --version')
  .usage('[OPTIONS]...')
  .option('-u, --url <value>', 'url value')
  .option('-m, --message <value>', 'message value.')
  .parse(process.argv);

const options = commander.opts();

const slack = SlackNotify(options.url);

console.log(options.url, options.message);

slack.send(options.message)
  .then(() => {
    console.log('###done!');
  }).catch((err) => {
    console.error(err);
  });