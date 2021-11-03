const readline = require('readline');
const { stdin: input, stdout: output } = require('process');
const rl = readline.createInterface({ input, output });

rl.question('What is your name? ', (name) => {
  rl.question('What is an activity you like doing? ', (activity) => {
    rl.question('What do you listen to while doing that? ', (music) => {
      rl.question('Which meal is your favourite (eg: dinner, brunch, etc.) ', (meal) => {
        process.stdout.write(`My name is ${name} and my favourite activity is ${activity}. When I am out I listen to ${music}. My Favourite meal is ${meal}.`);
        rl.close();
      });
    });
  });
  
});





