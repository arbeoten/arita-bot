module.exports = {
  name: "운세쪽지", // '운세쪽지' 관련 명령어 모음
  execute(message, args, client) {
    if (args.length === 0) {
      // 기본 운세쪽지
      message.channel.send("운세쪽지");
    } else {
      const subCommand = args[0]; // '시작', '중지' 같은 세부 명령어 처리

      switch (subCommand) {
        case "랭킹":
          break;
      }
    }
  },
};
