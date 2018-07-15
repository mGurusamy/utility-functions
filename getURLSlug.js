function getURLSlug(words){
    // added global (g)tag for the regex expression...
    return words
        .replace(/\s+/g, '-')
        .toLowerCase();
}