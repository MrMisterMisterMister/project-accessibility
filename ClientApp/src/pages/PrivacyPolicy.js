import React, { Component } from 'react';
import { Container } from 'reactstrap';
import Shape from '../components/Shape';

export class PrivacyPolicy extends Component {
    render() {
        return (
            <div className="privacypolicy__page">
                <div className="privacypolicy__page_banner">
                    <Shape section="privacypolicy" position={['left', 'right']} />
                </div>
                <Container className="privacypolicy__page_container">
                    <h1>Privacybeleid</h1>
                    <p className="text-muted">Laatst gewijzigd: 10 november 2023.</p>
                    <p>Project Accessibility geeft veel om uw privacy. Wij verwerken daarom uitsluitend gegevens die wij nodig hebben voor (het verbeteren van) onze dienstverlening en gaan zorgvuldig om met de informatie die wij over u en uw gebruik van onze diensten hebben verzameld. Wij stellen uw gegevens nooit voor commerciële doelstellingen ter beschikking aan derden.</p>
                    <p>Dit privacybeleid is van toepassing op het gebruik van de website en de daarop ontsloten dienstverlening van Project Accessibility. De ingangsdatum voor de geldigheid van deze voorwaarden is <span className="fw-bold fst-italic">10 november 2023</span>. Met het publiceren van een nieuwe versie vervalt de geldigheid van alle voorgaande versies. Dit privacybeleid beschrijft welke gegevens over u door ons worden verzameld, waar deze gegevens voor worden gebruikt en met wie en onder welke voorwaarden deze gegevens eventueel met derden kunnen worden gedeeld. Ook leggen wij aan u uit op welke wijze wij uw gegevens opslaan en hoe wij uw gegevens tegen misbruik beschermen en welke rechten u heeft met betrekking tot de door u aan ons verstrekte persoonsgegevens.</p>
                    <p>Als u vragen heeft over ons privacybeleid kunt u contact opnemen met onze contactpersoon voor privacy gerelateerde zaken. Contactgegevens vindt u aan het einde van het privacybeleid.</p>

                    <h4>Verzamelde gegevens</h4>
                    <p>Voor onze doeleinden verzamelen we alleen de strikt noodzakelijke gegevens van u. Deze gegevens zijn essentieel voor ons om u de best mogelijke service te kunnen bieden. Wij houden daarentegen altijd uw rechten en privacy in gedachten en zouden daarom nogmaals nooit meer gegevens verzamelen van u dan noodzakelijk is.</p>

                    <h5>Persoonsgegevens</h5>
                    <p>Hieronder vallen gegevens zoals uw naam, geboortedatum, geslacht, en nationaliteit. Bijvoorbeeld, wanneer u zich registreert voor een account op onze website, vragen we meestal om uw naam en geboortedatum. Bovendien verzamelen we gegevens om contact met u op te nemen: uw e-mailadres en telefoonnummer. Dit wordt bijvoorbeeld gebruikt om informatie te geven over uw account of voor belangrijke mededelingen via de mail of telefoonnummer. De veiligheid van uw gegevens wordt door ons erg serieus genomen en daarom zorgen wij ervoor dat uw gegevens te allen tijden compleet beveiligd zijn. Om dit te bereiken maken wij gebruik van authenticatie en autorisatie, zodat u alleen toegang heeft tot uw gegevens en andere gebruikers er niet bij kunnen. Ten slotte worden uw gegevens geëncrypt in ons systeem, waardoor het moeilijker wordt uw gegevens te achterhalen door onbevoegden.</p>

                    <h5>Medische gegevens</h5>
                    <p>We verzamelen alleen informatie over de beperkingen die ervaringsdeskundigen hebben op het gebied van medische gegevens. Deze informatie helpt bij het toekennen van de meest geschikte ervaringsdeskundigen voor een onderzoek. We slaan van een ervaringsdeskundige alleen de beperking(en) op. Dit doen we om de hoeveelheid gevoelige medische gegevens te beperken, omdat we het belangrijk vinden om de privacy van individuen te respecteren. De verzamelde beperkingen kunnen als volgt worden gegroepeerd:</p>

                    <div className="privacypolicy__page_list">
                        <div className="privacypolicy__page_list__item">
                            <div className="privacypolicy__page_list__ordinal">(i)</div>
                            <span>Lichamelijke beperking - dit kan variëren van mobiliteitsproblemen zoals moeite met lopen of het gebruik van een rolstoel, tot fysieke uitdagingen zoals het missen van een ledemaat.</span>
                        </div>
                        <div className="privacypolicy__page_list__item">
                            <div className="privacypolicy__page_list__ordinal">(ii)</div>
                            <span>Verstandelijke beperking - dit kan betrekking hebben op aandoeningen zoals het Downsyndroom of andere aandoeningen die de cognitieve ontwikkeling beïnvloeden of beperken.</span>
                        </div>
                        <div className="privacypolicy__page_list__item">
                            <div className="privacypolicy__page_list__ordinal">(iii)</div>
                            <span>Cognitieve beperking - dit kan variëren van leerstoornissen zoals dyslexie tot neurologische aandoeningen zoals ADHD of autisme.</span>
                        </div>
                        <div className="privacypolicy__page_list__item">
                            <div className="privacypolicy__page_list__ordinal">(iv)</div>
                            <span>Zintuiglijke beperking dit kan betrekking hebben op problemen met een van de zintuigen, zoals slechtziendheid of doofheid.</span>
                        </div>
                    </div>

                    <h5>Bedrijfsgegevens</h5>
                    <p>Bedrijfsgegevens zijn gegevens met betrekking tot bedrijfsinformatie. Hieronder vallen gegevens zoals de locatie van het bedrijf, algemene informatie over het bedrijf en clickstream-gegevens van het bedrijf. Dit zijn kostbare en essentiële gegevens van een bedrijf en moeten daarom ook goed beveiligd worden. Om ervoor te zorgen dat deze gegevens goed worden beschermd maken wij gebruik van authenticatie en autorisatie, zodat toegang wordt beperkt voor alleen degenen die bevoegd zijn tot deze gegevens.</p>

                    <h5>Onderzoeksgegevens</h5>
                    <p>Dit artikel heeft betrekking op onderzoeksgegevens die zijn verzameld door Stichting Accessibility. Deze gegevens bevatten de resultaten van onderzoeken die zijn uitgevoerd door ervaringsdeskundigen. Om de integriteit en vertrouwelijkheid van deze gegevens te waarborgen, hebben we strikte beveiligingsmaatregelen geïmplementeerd. Een van de belangrijkste maatregelen is het gebruik van encryptie. Door gevoelige onderzoeksgegevens te versleutelen verminderen we aanzienlijk het risico voor onbevoegden om toegang te krijgen tot de inhoud van de gegevens, zelfs in het geval van een datalek.</p>

                    <h4>Doel van gegevensverwerking</h4>
                    <p>Om de ervaring voor gebruikers te verbeteren, verwerken wij gegevens van u. Deze gegevens hebben wij nodig om een comfortabele en gemakkelijke ervaring te bieden voor gebruikers. Om bijvoorbeeld de beste ervaring te bieden voor gebruikers met beperkingen hebben wij de benodigde medische gegevens nodig om voor die groep een betere ervaring te bieden.</p>
                    <p>Wij benadrukken dat de mate waarin de gegevens worden verwerkt altijd plaatsvinden met de hoogste mate zorgvuldigheid en nauwkeurigheid dat in overeenstemming komt met de geldende privacy weten. Wij streven voor een gebruiksvriendelijke website gepaard met de bescherming van uw privacy en veiligheid van uw gebruikersinformatie.</p>

                    <h5>Algemeen doel van de verwerking</h5>
                    <p>Wij gebruiken uw gegevens uitsluitend ten behoeve van onze dienstverlening. Dat wil zeggen dat het doel van de verwerking altijd direct verband houdt met de opdracht die u verstrekt. Wij gebruiken uw gegevens niet voor (gerichte) marketing. Als u gegevens met ons deelt en wij gebruiken deze gegevens om - anders dan op uw verzoek - op een later moment contact met u op te nemen, vragen wij u hiervoor expliciet toestemming. Uw gegevens worden niet met derden gedeeld, anders dan om aan boekhoudkundige en overige administratieve verplichtingen te voldoen. Deze derden zijn allemaal tot geheimhouding gehouden op grond van de overeenkomst tussen hen en ons of een eed of wettelijke verplichting.</p>

                    <h5>Automatisch verzamelde gegevens</h5>
                    <p>Gegevens die automatisch worden verzameld door onze website worden verwerkt met het doel onze dienstverlening verder te verbeteren. Deze gegevens (bijvoorbeeld uw IP-adres, webbrowser en besturingssysteem) zijn geen persoonsgegevens.</p>

                    <h5>Bewaartermijn</h5>
                    <p>Wij bewaren uw gegevens zolang u cliënt van ons bent. Dit betekent dat wij uw klantprofiel bewaren totdat u aangeeft dat u niet langer van onze diensten gebruik wenst te maken. Als u dit bij ons aangeeft zullen wij dit tevens opvatten als een vergeetverzoek. Op grond van toepasselijke administratieve verplichtingen dienen wij facturen met uw (persoons)gegevens te bewaren. Deze gegevens zullen wij dus voor zolang de toepasselijke termijn loopt opslaan. Medewerkers hebben echter geen toegang meer tot uw cliëntprofiel en documenten die wij naar aanleiding van uw opdracht hebben vervaardigd.</p>

                    <h4>Uw rechten</h4>
                    <p>Op grond van de geldende Nederlandse en Europese wetgeving heeft u als betrokkene bepaalde rechten met betrekking tot de persoonsgegevens die door of namens ons worden verwerkt. Wij leggen u hieronder uit welke rechten dit zijn en hoe u zich op deze rechten kunt beroepen. In beginsel sturen wij om misbruik te voorkomen afschriften en kopieën van uw gegevens enkel naar uw bij ons reeds bekende e-mailadres. In het geval dat u de gegevens op een ander e-mailadres of bijvoorbeeld per post wenst te ontvangen, zullen wij u vragen zich te legitimeren. Wij houden een administratie bij van afgehandelde verzoeken, in het geval van een vergeetverzoek administreren wij geanonimiseerde gegevens. Alle afschriften en kopieën van gegevens ontvangt u in de machineleesbare gegevensindeling die wij binnen onze systemen hanteren. U heeft te allen tijde het recht om een klacht in te dienen bij de Autoriteit Persoonsgegevens als u vermoedt dat wij uw persoonsgegevens op een verkeerde manier gebruiken.</p>

                    <h5>Recht op inzage</h5>
                    <p>U heeft altijd het recht op inzage van uw gegevens die wij verwerken en die betrekking hebben tot u of herleidbaar zijn naar u. U kunt een verzoek met die strekking doen aan onze contactpersoon voor privacyzaken. U ontvangt dan binnen 30 dagen een reactie op uw verzoek. Als uw verzoek wordt ingewilligd , sturen wij u op het bij ons bekende e-mailadres een kopie van alle gegevens met een overzicht van de verwerkers die deze gegevens onder zich hebben, onder vermelding van de categorie waaronder wij deze gegevens hebben opgeslagen.</p>

                    <h5>Recht op rectificatie</h5>
                    <p>U heeft altijd het recht om de gegevens die wij (laten) verwerken en die betrekking hebben op uw persoon of daartoe herleidbaar zijn, te laten aanpassen. Dit kan bijvoorbeeld op het gebied van onjuiste of onvolledige persoonsgegevens van u. U kunt een verzoek met die strekking doen aan onze contactpersoon voor privacyzaken. Binnen 30 dagen ontvangt u een reactie op uw verzoek.</p>
                    <p>Als het geval is dat er meerdere verzoeken van de gebruiker verstuurd zijn, mogen wij drie maanden maximaal de tijd hebben om dit te verwerken. Daarentegen moeten wij dan wel duidelijk maken dat de verwerking van de verzoeken langer gaat duren. Indien uw verzoek wordt ingewilligd, sturen wij u op het bij ons bekende e-mailadres een bevestiging dat de gegevens zijn aangepast.</p>

                    <h5>Recht op beperking van de verwerking</h5>
                    <p>U heeft altijd het recht om de gegevens die wij (laten) verwerken die betrekking hebben op uw persoon of daartoe herleidbaar zijn, te beperken. U kunt een verzoek met die strekking doen aan onze contactpersoon voor privacyzaken. Binnen 30 dagen ontvangt u een reactie op uw verzoek. Indien uw verzoek wordt goedgekeurd, sturen wij u op het bij ons bekende e-mailadres een bevestiging dat de verwerking van uw gegevens is stopgezet totdat u de beperking opheft.</p>

                    <h5>Recht op overdraagbaarheid</h5>
                    <p>U heeft altijd het recht om de gegevens die wij (laten) verwerken en die betrekking hebben op uw persoon of daartoe herleidbaar zijn, door een andere partij te laten uitvoeren. U kunt een verzoek met die strekking doen aan onze contactpersoon voor privacyzaken. Binnen 30 dagen ontvangt u een reactie op uw verzoek. Als uw verzoek wordt ingewilligd, sturen wij u op het bij ons bekende e-mailadres afschriften of kopieën van alle gegevens over u die wij hebben verwerkt of in opdracht van ons door andere verwerkers of derden zijn verwerkt. Naar alle waarschijnlijkheid kunnen wij in zo'n geval de dienstverlening niet langer voortzetten, omdat de veilige koppeling van databestanden dan niet langer kan worden gegarandeerd.</p>

                    <h5>Recht op vergetelheid of verwijdering</h5>
                    <p>U heeft altijd het recht om de gegevens die wij (laten) verwerken en die betrekking hebben op uw persoon of daartoe herleidbaar zijn, te laten vergeten of verwijderen. Wanneer u een dergelijk verzoek indient, zorgen wij ervoor dat alle persoonlijke informatie die wij over u hebben verzameld, onmiddellijk wordt geanonimiseerd of verwijderd, in overeenstemming met onze voorwaarden. Om uw verzoek te kunnen verwerken, moeten we in staat zijn om u te identificeren. Dit is om te waarborgen dat het verzoek wordt ingediend door de juiste persoon en niet door een derde partij zonder toestemming. U kunt een verzoek met die strekking doen aan onze contactpersoon voor privacyzaken. Binnen 30 dagen ontvangt u een reactie op uw verzoek. Als uw verzoek wordt ingewilligd, sturen wij u op het bij ons bekende e-mailadres een bevestiging dat de gegevens volledig geanonimiseerd of verwijderd zijn in ons systeem.</p>

                    <h5>Recht van bezwaar en overige rechten</h5>
                    <p>U heeft in voorkomende gevallen het recht bezwaar te maken tegen de verwerking van uw persoonsgegevens door of in opdracht van Project Accessibility. Als u bezwaar maakt zullen wij onmiddellijk de gegevensverwerking staken in afwachting van de afhandeling van uw bezwaar. Is uw bezwaar gegrond, dan zullen wij afschriften en/of kopieën van gegevens die wij (laten) verwerken aan u ter beschikking stellen en daarna de verwerking blijvend staken. U heeft bovendien het recht om niet aan geautomatiseerde individuele besluitvorming of profiling te worden onderworpen. Wij verwerken uw gegevens niet op zodanige wijze dat dit recht van toepassing is. Bent u van mening dat dit wel zo is, neem dan contact op met onze contactpersoon voor privacyzaken.</p>

                    <h4>Cookies</h4>
                    <p>Cookies worden gedefinieerd als kleine tekstbestanden die op de harde schijf van uw computer worden geplaatst door uw webbrowser wanneer u een website bezoekt. Ze stellen gegevens die op één webpagina zijn verzameld in staat om te worden opgeslagen totdat ze later nodig zijn, waardoor een website u een gepersonaliseerde ervaring kan bieden en de website-eigenaar statistieken kan krijgen over hoe u de website gebruikt, zodat deze kan worden verbeterd. Sommige cookies kunnen een bepaalde tijd meegaan, zoals één dag of totdat u uw browser sluit. Anderen blijven voor onbepaalde tijd bestaan. Uw webbrowser moet u toestaan om alle cookies die u kiest te verwijderen. Het moet u ook toestaan om hun gebruik te voorkomen of te beperken.</p>
                    <p>Project Accessibility kan van tijd tot tijd cookies gebruiken. Ze kunnen worden geplaatst door software die wordt beheerd door derden wiens diensten Project Accessibility gebruikt om uw ervaring op de website te verbeteren.</p>
                    <p>Wanneer u de debsite voor het eerst bezoekt, moet u mogelijk bevestigen of u wilt dat Project Accessibility cookies gebruikt. Als u ervoor kiest om ze niet te accepteren, zal Project Accessibility ze niet gebruiken voor uw bezoek, behalve om vast te leggen dat u niet heeft ingestemd met het gebruik ervan voor enig ander doel. Houd er echter rekening mee dat als u ervoor kiest om geen cookies te gebruiken of hun gebruik via uw browserinstellingen te voorkomen, u mogelijk niet alle functionaliteiten op de website kunt gebruiken.</p>
                    <p>Project Accessibility kan cookies gebruiken voor de volgende doeleinden:</p>

                    <div className="privacypolicy__page_list">
                        <div className="privacypolicy__page_list__item">
                            <div className="privacypolicy__page_list__ordinal">(i)</div>
                            <span>Authenticatie en status - Project Accessibility gebruikt cookies om u te identificeren wanneer u de website bezoekt en terwijl u door de pagina’s van de website navigeert;</span>
                        </div>
                        <div className="privacypolicy__page_list__item">
                            <div className="privacypolicy__page_list__ordinal">(ii)</div>
                            <span>Personalisatie - Project Accessibility gebruikt cookies om informatie over uw voorkeuren op te slaan terwijl u door de website navigeert;</span>
                        </div>
                        <div className="privacypolicy__page_list__item">
                            <div className="privacypolicy__page_list__ordinal">(iii)</div>
                            <span>Beveiliging - Project Accessibility gebruikt cookies als onderdeel van de beveiligingsmaatregelen die worden gebruikt om de website en diensten te beschermen; en</span>
                        </div>
                        <div className="privacypolicy__page_list__item">
                            <div className="privacypolicy__page_list__ordinal">(iv)</div>
                            <span>Analyse - Project Accessibility gebruikt cookies om het gebruik en de prestaties van de website en de diensten te analyseren.</span>
                        </div>
                    </div>

                    <h4>Wijzigingen in het privacybeleid</h4>
                    <p>Wij behouden te allen tijde het recht ons privacybeleid te wijzigen. Op deze pagina vindt u echter altijd de meest recente versie. Als het nieuwe privacybeleid gevolgen heeft voor de wijze waarop wij reeds verzamelde gegevens met betrekking tot u verwerken, brengen wij u daarvan per e-mail op de hoogte.</p>

                    <h4>Contactgegevens</h4>
                    <p>Als u vragen of zorgen heeft over privacy bij het gebruik van onze website, stuur ons dan een gedetailleerd bericht naar <a href="mailto:info@clodsire.nl">info@clodsire.nl</a>, en Project Accessibility zal zijn uiterste best doen om uw zorgen te verhelpen.</p>
                </Container>
            </div>
        );
    }
}