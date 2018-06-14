# Angular Getting Started

WARNUNG: derzeit befinden sich einige Entwicklerabhängigkeiten in dem Zustand das es Sicherheitslücken gibt. Wichtig ist hier diese sind faktisch nicht existent da sie nur in der Zeit der Entwicklung genutzt werden sobald die App kompiliert sind existieren diese nichtmehr. Das Angular Team arbeitet bereits an einem Fix hierfür. [Quelle](https://github.com/angular/angular-cli/issues/10963). Dies sorgt derzeit für eine weniger gute First Time experience ich kann das Framework jedoch trotzdem nur wärmstens empfehlen.

Um zu beginnen benötigst du NPM (>= 5.5.1) und Node.js (>=8.9)

danach kannst du mit NPM die Angular CLI installieren via:

npm install -g @angular/cli

um die installation zu verfizieren kannst du den befehl:

``` bash
ng -v
```

eingeben.

## Kapitel 1

Danach kannst du über die Kommandozeile mit dem Befehl:

``` bash
ng new <PROJEKTNAME>
```

ein neues Angular Projekt erstellen. Dies legt alle Dateien die zum starten benötigt werden an und installiert alle Abhängigkeiten lokal im Ordner Node_Modules. Ich führe nun den Befehl

``` bash
ng new getting-started
```

aus. Auf der Root ebene unseres erstellten Projektes befinden sich verschiedene Konfigurationsdateien für den Angular Compiler. Da wir mit Typescript arbeiten muss diese Sprache transpiliert werden, da die modernen Browser diese erweiterte Version von Javascript nicht verstehen. Im Ordner node_modules liegen alle Abhängigkeiten welche von Angular oder auch uns benötigt werden um das Projekt später zu bauen. Der Ordner e2e beinhaltet End-to-end Tests welche mit Protractor durchgeführt werden. Der Ordner src beinhaltet unseren Code. dort werden wir als nächstes arbeitet. Auf der Root ebene finden sich weitere Konfigurationsdateien beispielsweise für Unit Tests mit Karma in der Datei karma.conf.js. Außerdem findet sich die berühmte Index.html. In dieser werden wir jedoch am wenigstens arbeiten da diese lediglich unsere Angular Anwendung aufspannt. Hier findet sich auch das Tag ```
<app-root></app-root>```. Dieses ist nicht standard HTML sondern ist eine art Identifier für Angular welche Komponente dort entstehen soll. Eine Angular Anwendung ist Komponentenbasiert aufgebaut. Diese Komponenten definieren views welche den Sichtbaren Teil der Anwendung aufbauen und über Programmlogik modifizieren können. Diese Viewkomponenten sind wie eine Art Baum in welchem Die App Komponente die Wurzel darstellt. Die App Komponente ist unter dem Ordner app zu finden in welchem im fortwährenden Entwicklungsprozess auch jeglicher Code entsteht. Der Ordner assets ist für verschiedenste Medien gedacht. Im Ordner enviroments lassen sich verschiedene Konfigurationen für Umgebungen treffen wie beispielsweise eine URL zum Backend. Die Datei Styles.css bietet die möglichkeit Globale Stylings festzulegen. Doch nun weiter zum app ordner. Eine Komponente besteht stets aus einem Template welches in HTML geschrieben wird, Styles welche in CSS/SCSS/SASS/LESS geschrieben werden können und Logik welche sich hauptsächlich im Typescript File befindet. Dieses ist die Verknüpfung für Templates und Styles. In Angular ist alles eine Klasse jedoch mit verschiedenen Decoratoren. Schaut man bespielsweise in die Komponente (app.component.ts) so kann man einerseits den Decorator @Component erkennen welcher die Pfade zu den Styles und Templates erhält aber auch einen Selector über den wir die Komponente wiederum in anderen Templates einbinden können. Außerdem sehen wir das eine Klasse AppComponent definiert und exportiert wird. In einer solchen Klassendefinition wird später unser Code stehen. Schaut man nun in das generierte template der Komponente (app.component.html) so sieht man verschiedene HTML Tags aber auch bereits einen Teil der Angular template Syntax. Diese bietet uns die Möglichkeit unsere Daten mit dem sichtbaren Teil der Anwendung zu verknüpfen aber auch an den Sichtbaren Teil funktionalität in Form von Eventhandlern anzubinden. Für ein genaueres beispiel können wir in den generieten Code schauen und erkennen die Sogenannte Interpolation in form von doppelt geschweiften Klammern ({{}}). Diese sind meist ein verweis auf eine Variable in unserem Fall title, welche sich in der Komponente wiederfinden lässt. Angular wird zur Laufzeit diese freistelle "füllen". Es ist aber auch möglich dort funktionale Ausdrücke zu definieren wie {{1 + 1}} oder Funktionen. Um Templates noch besser zu verstehen wollen wir nun selbst Änderungen durchführen. Dafür löschen wir zunächst den inhalt der app.component.html. Nun nutzen wir eine weiter Funktionalität der Angular Template Syntax die Möglichkeit sich an verschiedenste Sachen zu binden. Angular bietet uns außerdem die möglichkeit mit der CLI einen LiveServer für die Entwicklung zu starten. Dies erfolgt über den Befehl:

![alt text](https://github.com/henrysachs/Angular-getting-started/blob/master/Pictures/angularArchitecture.png "Sample Architecture")

``` bash
ng serve
```

Diesen kann man gestarted lassen für die Zeit der Entwicklung da Angular automatisch unser Projekt neu baut sobald wir Änderungen an den Dateien speichern.

Wir legen uns nun in unserer Komponente einen Datensatz an:

``` Javascript
export class AppComponent {
  employees = [
    {name: 'Max', wohnort: 'Frankfurt'},
    {name: 'Moritz', wohnort: 'Berlin'}
  ];
}
```

Dieser beinhaltet mehrere Datensätze im JSON Format. Nun können wir mit der sogenannten Direktive *ngFor über den Datensatz itieren. Dies erfolgt mit einer for each schleifen. Hierfür legen wir uns die temporäre Variable employee an mit der wir dann auf die verschiedenen Attribute des Datensatzes über Interpolation zugreifen können.

``` HTML
<ul>
  <li *ngFor="let employee of employees"> {{employee.name}} wohnt in {{employee.wohnort}}</li>
</ul>
```

Nun soll des weiteren auf den Komponentenaufbau von Angular eingangen werden. 

Angular besteht hauptsächlich aus Modulen welche parallelen zu Packages in der OOP ziehen. Diese Sammeln Komponenten und Services welche die Hauptbestandteile einer Angular Anwendung bilden aber auch verschiedene andere Bestandteile wie Pipes und Direktiven. Auch hier gibt es wieder ein Rootmodul welches weitere Module unter sich bündeln kann. Module können aber auch getrennt voneinander existieren. So lassen sich bespielsweise Module erst nachladen wenn bestimmte Routen besucht werden. Dadurch lässt sich das Initiale Laden der Anwendung schnell realiseren und man kommt Nutzern mit geringer Bandbreite entgegen. 

Eine Neue komponente können wir entweder selbst erzeugen indem wir die Dateien erstellen oder wir nutzen auch hierfür die Angular CLI. Dafür wechseln wir in das von uns gewählte Verzeichnis in unserem Fall app. und führen den folgenden Befehl aus.

``` bash
ng generate component userList
``` 

nun lässt sich in der Konsole erkennen das Angular 4 Dateien Neu angelegt und eine Datei geupdatet. Dies ist in unserem Fall das AppModul. 

``` bash
CREATE src/app/user-list/user-list.component.html (28 bytes)
CREATE src/app/user-list/user-list.component.spec.ts (643 bytes)
CREATE src/app/user-list/user-list.component.ts (280 bytes)
CREATE src/app/user-list/user-list.component.css (0 bytes)
UPDATE src/app/app.module.ts (496 bytes)
```

Wenn wir dieses nun inspizieren ist ein Verweis auf unsere UserList erfolgt. Nun können wir in unseren Templates diese Komponente Verwenden. 

Um dies zu testen können wir in unserer App Komponente im Template den Selektor verwenden. 

```HTML
<ul>
  <li *ngFor="let employee of employees"> {{employee.name}} wohnt in {{employee.wohnort}}</li>
</ul>
<app-user-list></app-user-list>
```

Die Ausgabe im Browser sieht dann wie folgt aus 

![alt text](https://github.com/henrysachs/Angular-getting-started/blob/master/Pictures/getting-started.PNG "Ausgabe des Browsers")

Nun könnten wir weitere Komponenten Anlegen wie beispielsweise eine Toolbar oder einen Footer.

## Kapitel 2

In diesem Kapitel wollen wir auf Routing und Http Requests in Angular eingehen. Hierfür erstellen wir uns ein neues Angular Projekt und fügen das routing flag an wodurch die Basisdateien für uns erstellt werden. Wir könnten diese auch selbst anlegen aber so sind wir etwas schneller.

``` bash
ng new http-calls --routing
```

In diesem Kapitel wollen wir in Angular mit einem Backend kommunizieren in unserem Fall wird dies mit dem Wetterdienst [OpenWeatherMap](https://openweathermap.org/). Hierfür müssen wir uns einen Account bei dem Dienst anlegen und Requests mit dem bereitgestellten API Key ausführen. Ihr solltet euch zu beginn des Kapitels anmelden da der Dienst 10 Minuten benötigt bevor euer Key gültig. 

![alt text](https://github.com/henrysachs/Angular-getting-started/blob/master/Pictures/ApiKey.PNG "ApiKey")

zu Beginn legen wir uns einen Ordner Wetter an in welchen wir alle Komponenten bündeln werden welche hiermit zutun haben. Dieser sollte unter dem app ordner liegen. Hierunter legen wir zunächst ein Modul ein damit wir mehrere Komponenten bündeln können dies erfolgt über den Befehl:

``` bash
ng generate module Weather --flat
```

Über das generate Kommando können wir allerlei Klassen generieren wie Komponenten oder Services aber auch Module. Durch das flat Flag wird kein neuer Ordner erstellt.
In der Hauptkomponente Wetter werden wir das Eingabefeld für den Nutzer bereitstellt, außerdem benötigen wir eine Komponente Welche unsere Wetterdaten anzeigt.
Diese erstellen wir wieder mit der Angular CLI im Ordner Wetter

``` bash
cd http-calls/src/app/Wetter
ng generate component weather --flat
ng generate component weatherDetail
```

Um HTTP Requests tätigen zu können bietet Angular eine Abstraktion von den Standard XML HTTP Request in Javascript. Diese macht das integrieren von APIs sehr einfach. Hierfür müssen wir in unserem Root Modul das sogenannte HttpClientModule importieren. Damit steht unserer Anwendung dieses nun zur verfügung. In unserem Wetterservice selbst müssen wir jedoch auch eine Instanz des Httpclients erstellen. Dies geschieht im Constructor der Klasse und durch die Dependency Injection sparen wir uns das schrieben dieser Form:

```typescript
constructor(private http: HttpClient) {
this.http = http;
}
```

und nutzen diese:

```typescript
constructor(private http: HttpClient) {}
```

Des weiteren müssen wir in unserer Anwendung im Template ein Eingabefeld und den zugehörigen Button zum Senden anlegen. Dies könnte der Einfachheit halber so aussehen:

```html
<label for="city">Choose a city: </label>
<input id="city" name="city" type="text">
<button>Send</button>
```

Nun müssen wir eine Aktion an das Click event binden um danach unseren Http Request durchführen zu können. Hierfür bietet Angular auch möglichkeiten um das binden zu vereinfachen. Die Browserevents werden an das Element gebunden indem es in runde Klammern geschrieben wird und danach die Funtkion folgt welche aufgerufen werden soll. Außerdem wollen wir der Funtkion den eingegeben Wert des Textfeldes übergeben. Damit dies im Template erfolgen kann können wir in Angular Elementen Referenzen zuordnen über die Raute. Unser Eingabefeld sieht dann wie folgt aus:

```html
<input id="city" name="city" type="text" #city>
```

nun können wir der Funktion den wert des Referenzierten Elementes übergeben.
Unser Template sieht dann wie folgt aus:

```html
<label for="city">Choose a city: </label>
<input id="city" name="city" type="text" #city>
<button (click)="requestCity(city.value)">Send</button>
```

Nun müssen wir die Funktion requestCity auch in unserer Klasse implementieren. Des weiteren bekommt diese Funktion den Stadtnamen übergeben mit welchem wir einen Request an die OpenWeatherApi  machen können. Da der Request Asynchron erfolgt müssen wir auf die Antwort "warten". Dies erledigt der HttpClient für uns. Dieser setzt jedoch auf das Design Pattern der Observables womit wir nach unserem Request mitteilen müssen das wir die Rückgabe "abbonieren" (subscriben) wollen. Dies geschieht mit der Subscribe Methode der von Angular mitgelieferten subscribe Methode. Zum nutzen dieser müssen wir mindestens eine Methode im Fall das vom Observable Daten gesendet werden implementieren. Außerdem können noch 2 weitere Funktionen aufgerufen werden vom Observable. Eine im Fall eines Fehlers in welchem wir diesen fehler in der Konsole ausgeben und eine Im Falle das der Observable Finalisiert. Wenn wir nun Daten vom Observable erhalten weisen wir diese einer Variablen zu, welche wir dann in unserem Temlate verwenden werden um diese vorerst einfach auszugeben. Da diese im JSON Format vorliegen können wir die JSON Pipe von Angular nutzen, welche uns die Daten formatiert. Eine Pipe in Angular ist vorgesehen um Daten zu transformieren. Die Notation sieht wie folgt aus: ```{{VAR_NAME | PIPE_NAME}}``` es können auch mehrere Pipes aneinander gebunden werden. Außerdem wollen wir diese Daten nur in dem Fall anzeigen wenn sie auch wirklich vorhanden sind. Hierfür bietet sich die *ngIf Direktive an. Unser Template und unsere zugehörige Klasse sehen dann wie folgt aus:

``` html
<label for="city">Choose a city: </label>
<input id="city" name="city" type="text" #city>
<button (click)="requestCity(city.value)">Send</button>

<pre *ngIf="weatherData"> {{weatherData | json}}</pre> 
```

``` javascript
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-weather-input',
  templateUrl: './weather-input.component.html',
  styleUrls: ['./weather-input.component.css']
})
export class WeatherInputComponent implements OnInit {

  weatherData;

  constructor(private http: HttpClient) { }

  ngOnInit() {
  }

  requestCity(city) {
    this.http.get('http://api.openweathermap.org/data/2.5/find?q=' + city + '&type=like&mode=json&appid=1ef067cbd6a9b9873405976c38c696e1')
    .subscribe(
      (data) => {
        this.weatherData = data;
       },
      (err) => {
        console.error(err);
      });
  }
}
```
Jedoch könnten andere Komponenten auch Requests an die API machen wollen. Außerdem sollten Komponenten nicht Daten laden oder speichern sondern diese lediglich anfordern und delegieren. Für das Laden von Daten nutzt Angular sogenannte Services. Sie bieten die Möglichkeit Daten zwischen Apis und Komponenten aber auch allgemein zwischen Komponenten auszutauschen welche nicht von einander wissen müssen. Ein service wird genau wie eine Komponente mit dem generate Kommando erzeugt. Wir werden nun also unsere Http Requests in einen Service auslagern.

```
ng generate service weather
```

Unser Service sollte danach wie folgt aussehen:

```typescript
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import {environment} from './../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  readonly BASE_URL = 'https://api.openweathermap.org/data/2.5/';

  constructor(private http: HttpClient) { }

  getWeatherData(city) {
    // tslint:disable-next-line:max-line-length
    return this.http.get(this.BASE_URL + 'weather?q=' + city + '&units=metric&mode=json&appid=' + environment.appID);
  }

}
```

Wir haben außerdem unseren API key in die Umgebungsvariablen ausgelagert und greifen von dort aus zu. Dies ist für das Beispiel Optional.
Nun müssen wir noch unseren WeatherService in der Komponente verwenden. Hierfür nutzen wir wieder die Dependency injection von Angular. Danach rufen wir die Methode getWeatherData auf.
```typescript
export class WeatherComponent implements OnInit {

  weatherData;
  errormessage;

  constructor(private weatherService: WeatherService) { }

  ngOnInit() {
  }

  requestCity(city) {
    this.weatherData = null;
    this.weatherService.getWeatherData(city).subscribe((data) => {
      this.weatherData = data;
      this.errormessage = null;
    }, (err) => {
      this.weatherData = null;
      this.errormessage = err.message;
    });
  }
}
```

Wir speichern die Ergebnisse des Requestes in der Variablen weatherData welche wir zu beginn jedes requestes leeren. Außerdem speichern wir im fehlerfall unsere Daten in der Variablen errormessage um dem Benutzer einen fehler anzeigen zu können.
Des weiteren um das volle Potential von Typescript zu nutzen sollten wir unsere API Daten typisieren. Dies bietet den Vorteil das wir während der Entwicklung nicht auf nicht vorhandene Eigenschaften des Objektes zugreifen. Gerade in größeren Entwicklerteams ist dies von Vorteil. Außerdem können so weniger fehler bei Übergabeparametern oder ähnlichem gemacht werden. Deshalb legen wir uns für die Antwort unsere Api ein Interface an welches das Datenformat beschreibt. Dies sollte in einer separaten Datei erfolgen die wir ```weather.ts``` nennen. Für die IDE VS Code empfiehlt sich gerade bei solch großen Objekten das Plugin JSON to TS. Sonst kann man dies auch händisch anlegen. Ich stelle dies hier bereit:

```typescript
interface WeatherObject {
  coord: Coord;
  weather: Weather[];
  base: string;
  main: Main;
  visibility: number;
  wind: Wind;
  clouds: Clouds;
  dt: number;
  sys: Sys;
  id: number;
  name: string;
  cod: number;
}

interface Sys {
  type: number;
  id: number;
  message: number;
  country: string;
  sunrise: number;
  sunset: number;
}

interface Clouds {
  all: number;
}

interface Wind {
  speed: number;
  deg: number;
}

interface Main {
  temp: number;
  pressure: number;
  humidity: number;
  temp_min: number;
  temp_max: number;
}

interface Weather {
  id: number;
  main: string;
  description: string;
  icon: string;
}

interface Coord {
  lon: number;
  lat: number;
}
```

Diese Typisierung können wir nun an unsere Objekte hängen dies erfolgt durch einen doppelpunkt nach der Variablen und dahinter der Typ.

```typescript
this.weatherService.getWeatherData(city).subscribe((data: WeatherObject) => {
  //code
}
```

Diese Daten wollen wir nun nutzen um eine DetailKomponente zu bauen welche uns jegliche Wetterdaten anzeigen kann solange sie vom Typ WeatherObject sind. Erstellt haben wir diese bereits jedoch wollen wir sie nun mit code füllen. Um jedoch die funktionalität der Komponente zu testen können wir diese in unser Template einfügen. 

```html
<app-weather-details class="weather-details" *ngIf="weatherData"></app-weather-details>
```

Dieser Komponente müssen wir nun unsere Daten übergeben. Dies geschieht über das Binding von Angular. In unserer Detail Komponente definieren wir das wir den Parameter weatherdata erwarten und speichern dieser in selbiger Variable. Hierfür verwenden wir den Input Decorator welcher festlegt das diese Variable als property übergeben werden kann. Außerdem können wir noch den Property namen definieren bleibt dieser leer so ist es der Variablenname. Unsere Komponente sieht dann wie folgt aus:

```typescript
export class WeatherDetailsComponent {

  @Input() weatherData: WeatherObject;

  constructor() { }
}
```

Nun müssen wir noch unsere Daten anzeigen. Hierfür verwenden wir folgendes Template:

```html
<div class="weather-details__container">
  <h1>{{weatherData.name}}</h1>
  <p>{{weatherData.weather[0].description}}</p>
  <h1>{{weatherData.main.temp}} &deg;C</h1>
</div>
```

Wir wollen des weiteren aber auch ein Icon abhängig vom Wetter anzeigen. Hierfür könnten wir mehrere ngifs verwenden jedoch wollen wir in diesem Zuge noch das Switch case anmerken. Für unsere Icons nutzen wir FontAwesome welches wir in unserer Index.html importieren. Wie der Import erfolgt wird auf der Seite des herstellers beschrieben dieser sollte wie folgt aussehen:

```html
<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.0.13/css/all.css" integrity="sha384-DNOHZ68U8hZfKXOrtjWvjxusGo9WQnrNx2sqG0tfsghAvtVlRW3tvkXWZh58N9jp" crossorigin="anonymous">
```

nun können wir unser Switch case auf die jeweilige wetterbeschreibung ausführen. Das fertige Template sollte wie folgt aussehen:

```html
<div class="weather-details__container">
  <h1>{{weatherData.name}}</h1>
  <div class="weather-icon__container" [ngSwitch]="!!weatherData.weather[0].main">

    <i class="fas fa-cloud" *ngSwitchCase="weatherData.weather[0].main === 'Clouds'">
      </i>

      <i class="fas fa-tint" *ngSwitchCase="weatherData.weather[0].main === 'Rain' || weatherData.weather[0].main === 'Drizzle'">
      </i>

      <i class="fas fa-bolt" *ngSwitchCase="weatherData.weather[0].main === 'Storm' || weatherData.weather[0].main === 'Thunderstorm'">
      </i>


      <i class="fas fa-sun" *ngSwitchCase="weatherData.weather[0].main === 'Sunny' || weatherData.weather[0].main === 'Clear'">
      </i>

    <i class="fas fa-eye-slash" *ngSwitchCase="weatherData.weather[0].main === 'Fog'"></i>
  </div>
  <p>{{weatherData.weather[0].description}}</p>
  <h1>{{weatherData.main.temp}} &deg;C</h1>
</div>
```

außerdem nutzen wir etwas css zum styling

```css
.weather-details__container{
  display: flex;
  flex-direction: column;
  justify-items: center;
  align-items: center;
}
.weather-icon__container{
  font-size: 100px;
}
```

Nun ist unsere Api anfrage vollständig einsatzbereit.

## Kapitel 3

```bash
npm install — save @types/googlemaps
```

in Index.html

```Html
<script src="http://maps.googleapis.com/maps/api/js"></script>
```

danach erstellen von modulen und componenten

```bash
ng generate module shared
cd src/app/shared/
ng generate component map
```

export map in shared module
import shared module in Wettermodule

``` html
<div #gmap style="width:400px;height:400px"></div>
```

```typescript
import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { } from '@types/googlemaps';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  @ViewChild('gmap') gmapElement: any;
  @Input() lat;
  @Input() len;
  map: google.maps.Map;

  ngOnInit() {
    const mapProp = {
      center: new google.maps.LatLng(this.lat, this.len),
      zoom: 15,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    this.map = new google.maps.Map(this.gmapElement.nativeElement, mapProp);
  }
}
```

danach nutzen von dieser Komponente in Wetter.html Template

```html
<label for="city">Choose a city: </label>
<input id="city" name="city" type="text" #city>
<button (click)="requestCity(city.value)">Send</button>

<p *ngIf="errormessage">Stadt nicht gefunden</p>
 <div class="weather__container">
  <app-weather-details class="weather-details" [weatherData]="weatherData" *ngIf="weatherData"></app-weather-details>
  <app-map class="weather-map" [lat]="weatherData.coord.lat" [len]="weatherData.coord.lon" *ngIf="weatherData"></app-map>
</div>
```

css so können auch mobile geräte unterstützt werden.

```css
.weather__container{
  display: flex;
  flex-direction: row;
}
.weather-details{
  flex: 0 50%;
}
.weather-map{
  flex: 0 50%;
  display: flex;
  justify-content: center;
}

@media only screen and (max-width: 600px) {
  .weather__container{
    flex-direction: column;
  }
}
```

fertiges Projekt

[GITHUB](https://github.com/henrysachs/Angular-getting-started)

[DEMO](https://weatherapi-1528656089426.firebaseapp.com)