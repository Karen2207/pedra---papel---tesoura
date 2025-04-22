let p = 0, c = 0;

function game(jp) {
    const jc = Math.floor(Math.random() * 3);
    const choices = ["✋", "✊", "✌️"];
    const textChoices = ["PAPEL", "PEDRA", "TESOURA"];
    
    const np = textChoices[jp];
    const nc = textChoices[jc];

    const r = (jp === jc) ? 0 :
              (jp === 0 && jc === 1 || jp === 1 && jc === 2 || jp === 2 && jc === 0) ? 1 : 2;

    document.getElementById("hands").innerHTML = `${choices[jp]} vs ${choices[jc]}`;
    document.getElementById("tres").value = `${np} contra ${nc} : ${r === 0 ? "Empate." : r === 1 ? "Você ganhou." : "Eu ganhei."}`;

    if (r === 1) p++;
    if (r === 2) c++;

    document.getElementById("tpla").value = p;
    document.getElementById("tcom").value = c;
}
