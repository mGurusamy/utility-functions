function getInitials(name){
    retrun name.split(' ')
        .Map(word => word.charAt(0))
        .join('');
}