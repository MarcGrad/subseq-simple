let justSequenceAssembled = '';
let fromParameter = getFrom();
let toParameter = getTo();

function getTextarea() {
    return document.querySelector('#subseqTextarea').value;
}
function getFrom() {
    return document.querySelector('#from').value;
}
function getTo() {
    return document.querySelector('#to').value;

}
function sequenceSplit() {
    sequence = getTextarea();
    sequenceParts = sequence.split('\n');
    return sequenceParts;
}
function getHeader() {
    return sequenceParts[0];
}
function getSeq() {
    return sequenceSplit().splice(1, sequenceSplit().length);

}
function sequenceAssemble() {
    justSequenceAssembled += getSeq().toString();
    return justSequenceAssembled.replace(/,/g, '');

}
function cutSequence() {
    if (getTo() <= getFrom() || getTo() === 0) {
        return console.log('Please set good parameters!');
    }
    else {
        return sequenceAssemble().substring(getFrom() - 1, getTo() - 1);
    }
}
function headSubsequence() {
    return getHeader() + '|' + fromParameter.toString() + '/' + toParameter.toString() + '|' + '\n';

}
function stickHeadAndSubseq() {
    return headSubsequence() + cutSequence();
}
function printResult () {
    document.getElementById("demo").innerHTML = stickHeadAndSubseq()
}

function summonAll() {
    sequenceSplit();
    getSeq();
    sequenceAssemble();
    cutSequence();
    printResult();

}


