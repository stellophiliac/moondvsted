
window.onload = function () { //runs onload

    members.sort(function (a, b) {
        if (a.name < b.name) {
            return -1;
        }
        if (a.name > b.name) {
            return 1;
        }
        return 0;
    });
    console.log(members)

    memberArea = document.getElementById('member-list')

    for (var i = 0; i < members.length; i++) {
        var memberItem = document.createElement('div')

        if (members[i].email) {
            var emailOpen = 'a href="mailto:' + members[i].email + '"'
            var emailClose = 'a'
        } else {
            var emailOpen = 's'
            var emailClose = 's'
        }

        if (members[i].site) {
            var siteOpen = 'a href="' + members[i].site + '"'
            var siteClose = 'a'
        } else {
            var siteOpen = 's'
            var siteClose = 's'
        }

        memberItem.innerHTML = '<p><em>' + members[i].name + '</em></p>\
        ' + '<p>' + members[i].country + ' ﹒ \
        <' + emailOpen + '>Email</' + emailClose + '> &\
        <' + siteOpen + '>Website</' + siteClose + '>' + '</p>'+'\
        <p>Favorite(s): '+ members[i].favchar+'</p>'
        memberArea.appendChild(memberItem)
    }



}
