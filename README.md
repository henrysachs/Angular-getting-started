Um zu beginnen benötigst du NPM (>= 5.5.1) und Node.js (>=8.9)

danach kannst du mit NPM die Angular CLI installieren via:

npm install -g @angular/cli

um die installation zu verfizieren kannst du den befehl: 

``` bash
ng -v 
```

eingeben.

Danach kannst du über die Kommandozeile mit dem Befehl:

```
ng new <PROJEKTNAME>
```

ein neues Angular Projekt erstellen. Dies legt alle Dateien die zum starten benötigt werden an und installiert alle Abhängigkeiten lokal im Ordner Node_Modules. Ich führe nun den Befehl

``` 
ng new getting-started 
```

aus. Auf der Root ebene unseres erstellten Projektes befinden sich verschiedene Konfigurationsdateien für den Angular Compiler. Da wir mit Typescript arbeiten muss diese Sprache transpiliert werden, da die modernen Browser diese erweiterte Version von Javascript nicht verstehen. Im Ordner node_modules liegen alle Abhängigkeiten welche von Angular oder auch uns benötigt werden um das Projekt später zu bauen. Der Ordner e2e beinhaltet End-to-end Tests welche mit Protractor durchgeführt werden. Der Ordner src beinhaltet unseren Code. dort werden wir als nächstes arbeitet. Auf der Root ebene finden sich weitere Konfigurationsdateien beispielsweise für Unit Tests mit Karma in der Datei karma.conf.js. Außerdem findet sich die berühmte Index.html. In dieser werden wir jedoch am wenigstens arbeiten da diese lediglich unsere Angular Anwendung aufspannt. Hier findet sich auch das Tag <app-root></app-root>. Dieses ist nicht standard HTML sondern ist eine art Identifier für Angular welche Komponente dort entstehen soll. Eine Angular Anwendung ist Komponentenbasiert aufgebaut. Diese Komponenten definieren views welche den Sichtbaren Teil der Anwendung aufbauen und über Programmlogik modifizieren können. Diese Viewkomponenten sind wie eine Art Baum in welchem Die App Komponente die Wurzel darstellt. Die App Komponente ist unter dem Ordner app zu finden in welchem im fortwährenden Entwicklungsprozess auch jeglicher Code entsteht. Der Ordner assets ist für verschiedenste Medien gedacht. Im Ordner enviroments lassen sich verschiedene Konfigurationen für Umgebungen treffen wie beispielsweise eine URL zum Backend. Die Datei Styles.css bietet die möglichkeit Globale Stylings festzulegen. Doch nun weiter zum app ordner. Eine Komponente besteht stets aus einem Template welches in HTML geschrieben wird, Styles welche in CSS/SCSS/SASS/LESS geschrieben werden können und Logik welche sich hauptsächlich im Typescript File befindet. Dieses ist die Verknüpfung für Templates und Styles. In Angular ist alles eine Klasse jedoch mit verschiedenen Decoratoren. Schaut man bespielsweise in die Komponente (app.component.ts) so kann man einerseits den Decorator @Component erkennen welcher die Pfade zu den Styles und Templates erhält aber auch einen Selector über den wir die Komponente wiederum in anderen Templates einbinden können. Außerdem sehen wir das eine Klasse AppComponent definiert und exportiert wird. In einer solchen Klassendefinition wird später unser Code stehen. Schaut man nun in das generierte template der Komponente (app.component.html) so sieht man verschiedene HTML Tags aber auch bereits einen Teil der Angular template Syntax. Diese bietet uns die Möglichkeit unsere Daten mit dem sichtbaren Teil der Anwendung zu verknüpfen aber auch an den Sichtbaren Teil funktionalität in Form von Eventhandlern anzubinden. Für ein genaueres beispiel können wir in den generieten Code schauen und erkennen die Sogenannte Interpolation in form von doppelt geschweiften Klammern ({{}}). Diese sind meist ein verweis auf eine Variable in unserem Fall title, welche sich in der Komponente wiederfinden lässt. Angular wird zur Laufzeit diese freistelle "füllen". Es ist aber auch möglich dort funktionale Ausdrücke zu definieren wie {{1 + 1}} oder Funktionen. Um Templates noch besser zu verstehen wollen wir nun selbst Änderungen durchführen. Dafür löschen wir zunächst den inhalt der app.component.html. Nun nutzen wir eine weiter Funktionalität der Angular Template Syntax die Möglichkeit sich an verschiedenste Sachen zu binden. Angular bietet uns außerdem die möglichkeit mit der CLI einen LiveServer für die Entwicklung zu starten. Dies erfolgt über den Befehl:

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