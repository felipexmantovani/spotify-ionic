import { AfterViewInit, Component, ElementRef, Input, OnInit, Renderer2, ViewChild } from '@angular/core';
import { Song } from '../../../song/model/song';

@Component({
  selector: 'app-player-timeline',
  templateUrl: './player-timeline.component.html',
  styleUrls: ['./player-timeline.component.scss']
})
export class PlayerTimelineComponent implements OnInit, AfterViewInit {
  @ViewChild('timeline', { static: false })
  public timeline: ElementRef;

  @ViewChild('timelinePercent', { static: false })
  public timelinePercent: ElementRef;

  @Input()
  public isSmall: boolean = true;

  public showMarker: boolean = false;

  public showMinutes: boolean = false;

  private size: string = '1px';

  private opacity: string = '0.3';

  @Input()
  public song: Song;

  public timeCurrent: string = '00:00';

  private timePercent: number = 0;

  constructor(private renderer: Renderer2) {}

  ngOnInit(): void {
    if (!this.isSmall) {
      this.showMarker = true;
      this.showMinutes = true;
      this.size = '4px';
      this.opacity = '0.1';
    }
  }

  ngAfterViewInit() {
    this.renderer.setStyle(this.timeline.nativeElement, 'height', this.size);
    this.renderer.setStyle(this.timeline.nativeElement, 'background-color', `rgba(255, 255, 255, ${this.opacity})`);
    this.renderer.setStyle(this.timelinePercent.nativeElement, 'width', `${this.timePercent}%`);
    this.renderer.setStyle(this.timelinePercent.nativeElement, 'height', this.size);
  }
}
