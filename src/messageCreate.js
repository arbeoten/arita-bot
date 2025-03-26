module.exports = {
  name: "messageCreate",
  execute(message, client) {
    // if (message.author.bot) return;

    // +로 시작할 경우에만 반응
    const prefix = "+";
    if (!message.content.startsWith(prefix)) return;

    // / +/는 하나 이상의 공백을 나타내는 정규표현식
    // +는 slice에서 제거되고 공백을 기준으로 split되어 args에 들어간다.
    const args = message.content.slice(prefix.length).trim().split(/ +/);
    // 명령어만 commandName에 넣고 배열에서 빼냄
    const commandName = args.shift();

    try {
      if (commandName.startsWith("운세쪽지")) {
        const command = require(`./Fortune/fortune.js`);
        command.execute(message, args, client);
      }
      // message -> 유저 정보나 메시지 내용등의 정보를 담고있음
      // args -> 명령어를 제외하고 가공처리된 채팅 내용
      // client -> 명령 수행시 사용되는 봇의 정보
    } catch (error) {
      console.error(`명령어 실행 오류: ${error.message}`);
    }
  },
};
