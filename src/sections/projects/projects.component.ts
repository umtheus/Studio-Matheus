import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-projects',
  standalone: true,
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
})
export class ProjectsComponent {
  projetos = [
    {
      nome: 'Projeto A',
      linkClone: 'https://github.com/umtheus/Calculadora.git',
    },
    {
      nome: 'Projeto B',
      linkClone: 'https://github.com/umtheus/Todo-List.git',
    },
    {
      nome: 'Projeto C',
      linkClone: 'https://github.com/umtheus/uber-ui-responsive',
    },
    {
      nome: 'Projeto D',
      linkClone: 'https://github.com/umtheus/hou-set.git',
    },
  ];

  constructor(private toastr: ToastrService) {}

  copiarClone(link: string) {
    navigator.clipboard.writeText(link).then(() => {
      this.toastr.success('Link copiado com sucesso!', 'Clone GitHub');
    });
  }
}
