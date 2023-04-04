exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("quotes").del();
  await knex("quotes").insert([
    {
      id: 1,
      text_snipet:
        "Some of these shows have episodes on true crimes such as mysterious disappearances and sketchy deaths.",
    },
    {
      id: 2,
      text_snipet:
        " The podcast blends spoken word narratives, ideas, and history to investigate beliefs, perception, and reality.",
    },
    {
      id: 3,
      text_snipet:
        "There are episodes covering odd encounters, disappearances, secret societies, doppelgängers, supernatural abductions, and mysterious deaths.",
    },
    {
      id: 4,
      text_snipet:
        "From “Owl Man,” to what’s haunting the Andrew Family, ghost hunting, and “the first A.I. cryptid or demon,” episodes are equal parts frightening and unexpected.",
    },
    {
      id: 5,
      text_snipet:
        "“Last Podcast On The Left” covers all things horror from hauntings and mysteries to serial killers, cults, cryptids, and demons. ",
    },
    {
      id: 6,
      text_snipet:
        "There are deep-dives into internet phenomena, odd encounters, doppelgängers, weird noises, celestial events, and abductions.",
    },
    {
      id: 7,
      text_snipet:
        "This series focuses on controversies and conspiracies on topics like Julian Assange's extradition, the Paul Pelosi attack, and ABC News producer James Gordon Meek's documentary, 3212 Un-Redacted, that was released just before the FBI raided his home and he seemingly vanished.",
    },
  ]);
};
