enum Membership {
    Simple,
    Standart,
    Premium
}

const membership = Membership.Standart;
const membershipReverse = Membership[2];

console.log(membership);
console.log(membershipReverse);

enum SocialMedia {
    VK = 'VK',
    FB = 'Facebook',
    IG = 'Instagram'
}

const social = SocialMedia.IG
console.log(social)