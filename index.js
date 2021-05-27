function superbowlWin(arrayRecord){
    const victory = arrayRecord.find(record => record.result ===`W`);
    if (victory) {
        return victory.year
    } else {
        
    }
}